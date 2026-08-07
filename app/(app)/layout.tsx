import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AudioPlayer from "@/components/effects/AudioPlayer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import ParticleBackground from "@/components/effects/ParticleBackground";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ParticleBackground />
      <Header />
      <ScrollProgress />
      <main className="min-h-screen pt-16 relative z-10">{children}</main>
      <Footer />
      <AudioPlayer />
      <BackToTop />
    </>
  );
}
