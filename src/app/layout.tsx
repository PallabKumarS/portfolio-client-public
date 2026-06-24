import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/provider/ThemeProvider";
import { Toaster } from "sonner";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PKS Portfolio",
  description:
    "Portfolio of Pallab Kumar Sarker — Full Stack Developer specializing in Next.js, Node.js, and TypeScript",
  keywords: [
    "Pallab Kumar Sarker",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
  ],
  openGraph: {
    title: "PKS Portfolio",
    description: "Portfolio of Pallab Kumar Sarker — Full Stack Developer",
    type: "website",
    locale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <BackgroundBeamsWithCollision className="h-min-fit">
            <div className="h-full w-full">{children}</div>
          </BackgroundBeamsWithCollision>
          <Toaster
            position="top-center"
            duration={3000}
            richColors
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
