import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/provider/ThemeProvider";
import { Toaster } from "sonner";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "PKS Portfolio",
  description: "Portfolio of Pallab Kumar Sarker (PKS)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <BackgroundBeamsWithCollision className="min-h-fit items-start">
            <div className="">
              <div className="">
                <Navbar />
              </div>
              <div className="h-full">{children}</div>
              <Footer />
            </div>
          </BackgroundBeamsWithCollision>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
