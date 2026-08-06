import {
  HeroSection,
  StatsSection,
  IntroSection,
  KeunggulanSection,
  ProdukPreviewSection,
  InquirySection,
} from "@/components/home/HomeSections";

export const metadata = {
  title: "PT Yones Satiya Wacana - Global Palm Oil & CPO Supplier",
  description:
    "PT Yones Satiya Wacana menghadirkan produk agribisnis premium yang bersumber secara etis dan berkelanjutan untuk pasar internasional.",
};

export default function HomePage() {
  return (
    <div className="bg-[#f7f9fb]">
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <KeunggulanSection />
      <ProdukPreviewSection />
      <InquirySection />
    </div>
  );
}
