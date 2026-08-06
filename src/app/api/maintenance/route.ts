import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );
}

// GET /api/maintenance → { maintenance_mode: boolean }
export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "maintenance_mode")
    .single();

  if (error) {
    // Kalau row belum ada, anggap OFF
    return NextResponse.json({ maintenance_mode: false });
  }

  return NextResponse.json({ maintenance_mode: data.value === "true" });
}

// POST /api/maintenance  body: { enabled: boolean }
export async function POST(request: Request) {
  const supabase = await createClient();

  // Cek session — hanya admin yang boleh
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  // Validasi eksplisit — tolak kalau field enabled tidak dikirim
  if (typeof body.enabled !== "boolean") {
    return NextResponse.json({ error: "Field 'enabled' harus boolean" }, { status: 400 });
  }
  const enabled: boolean = body.enabled;

  const { error } = await supabase
    .from("site_settings")
    .upsert({ key: "maintenance_mode", value: String(enabled) }, { onConflict: "key" });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ maintenance_mode: enabled });
}
