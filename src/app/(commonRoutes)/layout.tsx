import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-screen w-full">
        <Navbar />
        <div className="h-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
