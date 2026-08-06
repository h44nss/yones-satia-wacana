"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Warna utama biru tua
const BLUE = "#1e3a5f";
const BLUE_MID = "#2d5a9e";
const BLUE_LIGHT = "#3b82f6";

export default function MaintenancePage() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>

        {/* Logo — berputar pelan */}
        <div style={styles.logoWrapper}>
          <div style={styles.logoSpin}>
            <Image
              src="/logo.png"
              alt="PT Yones Satiya Wacana"
              width={160}
              height={80}
              style={{ objectFit: "contain", width: "auto", height: "70px" }}
              priority
            />
          </div>
        </div>

        {/* Divider animasi shimmer */}
        <div style={styles.dividerTrack}>
          <div style={styles.dividerShimmer} />
        </div>

        {/* Badge */}
        <div style={styles.badge}>🔧 Under Maintenance</div>

        {/* Heading */}
        <h1 style={styles.heading}>
          Kami Sedang Melakukan{" "}
          <span style={styles.highlight}>Pembaruan</span>
        </h1>

        {/* Subtext */}
        <p style={styles.subtext}>
          Website PT Yones Satiya Wacana sedang dalam proses maintenance untuk
          memberikan pengalaman yang lebih baik bagi Anda. Kami akan kembali
          dalam waktu dekat.
        </p>

        {/* Progress bar */}
        <div style={styles.progressWrapper}>
          <div style={styles.progressTrack}>
            <div style={styles.progressBar} />
          </div>
          <p style={styles.loadingText}>Sedang diperbarui{dots}</p>
        </div>

        {/* Info cards */}
        <div style={styles.cards}>
          <div style={styles.card}>
            <span style={styles.cardIcon}>⏱️</span>
            <p style={styles.cardTitle}>Estimasi Selesai</p>
            <p style={styles.cardValue}>Segera</p>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>📧</span>
            <p style={styles.cardTitle}>Hubungi Kami</p>
            <p style={styles.cardValue}>info@yonessatiyawacana.com</p>
          </div>
        </div>

        {/* Footer */}
        <p style={styles.footer}>
          © {new Date().getFullYear()} PT Yones Satiya Wacana · All rights reserved
        </p>
      </div>

      <style>{`
        @keyframes logo-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes progress-fill {
          0%   { width: 10%; }
          50%  { width: 80%; }
          100% { width: 10%; }
        }
        @keyframes shimmer-slide {
          0%   { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', Arial, sans-serif",
    padding: "2rem",
  },
  container: {
    textAlign: "center",
    maxWidth: "640px",
    width: "100%",
    animation: "fade-in-up 0.7s ease-out both",
  },

  // Logo berputar sangat pelan (24 detik satu putaran)
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  logoSpin: {
    animation: "logo-spin 24s linear infinite",
    display: "inline-flex",
  },

  // Garis divider dengan efek shimmer
  dividerTrack: {
    position: "relative",
    width: "64px",
    height: "3px",
    background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})`,
    borderRadius: "999px",
    margin: "0 auto 2.5rem",
    overflow: "hidden",
  },
  dividerShimmer: {
    position: "absolute",
    top: 0,
    width: "50%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
    animation: "shimmer-slide 2s ease-in-out infinite",
    borderRadius: "999px",
  },

  // Badge
  badge: {
    display: "inline-block",
    background: "#eff6ff",
    border: `1px solid #bfdbfe`,
    color: BLUE,
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    padding: "0.35rem 1rem",
    borderRadius: "999px",
    marginBottom: "1.25rem",
    textTransform: "uppercase" as const,
  },

  // Heading
  heading: {
    color: BLUE,
    fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)",
    fontWeight: 800,
    lineHeight: 1.2,
    margin: "0 0 1rem",
    letterSpacing: "-0.02em",
  },
  highlight: {
    background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  // Subtext
  subtext: {
    color: "#64748b",
    fontSize: "1rem",
    lineHeight: 1.75,
    margin: "0 auto 2rem",
    maxWidth: "480px",
  },

  // Progress bar
  progressWrapper: {
    marginBottom: "2.5rem",
  },
  progressTrack: {
    background: "#e2e8f0",
    borderRadius: "999px",
    height: "6px",
    overflow: "hidden",
    marginBottom: "0.6rem",
  },
  progressBar: {
    height: "100%",
    borderRadius: "999px",
    background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})`,
    animation: "progress-fill 3s ease-in-out infinite",
    boxShadow: `0 0 8px rgba(59,130,246,0.4)`,
  },
  loadingText: {
    color: "#94a3b8",
    fontSize: "0.8rem",
    letterSpacing: "0.04em",
    margin: 0,
  },

  // Info cards
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    marginBottom: "2.5rem",
  },
  card: {
    background: "#f0f6ff",
    border: `1px solid #bfdbfe`,
    borderRadius: "14px",
    padding: "1.25rem 1rem",
  },
  cardIcon: {
    fontSize: "1.4rem",
    display: "block",
    marginBottom: "0.5rem",
  },
  cardTitle: {
    color: BLUE_MID,
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.07em",
    textTransform: "uppercase" as const,
    margin: "0 0 0.3rem",
  },
  cardValue: {
    color: BLUE,
    fontSize: "0.85rem",
    fontWeight: 600,
    margin: 0,
    wordBreak: "break-word" as const,
  },

  // Footer
  footer: {
    color: "#94a3b8",
    fontSize: "0.75rem",
    margin: 0,
  },
};
