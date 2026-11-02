import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p5r-site">
      <Header />
      <ScrollProgress />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
