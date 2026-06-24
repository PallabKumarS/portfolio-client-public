import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "PKS Portfolio | Dashboard",
  description: "Admin dashboard for managing portfolio content",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="flex min-h-screen overflow-x-hidden ">
      {/* Add overflow-x-hidden */}
      <Suspense>
        <AppSidebar />
      </Suspense>
      <div className="flex w-full flex-col overflow-x-hidden">
        {/* Add overflow-x-hidden */}
        <div className="flex items-center justify-between border-b px-4 py-2">
          <SidebarTrigger />
          <div className="flex items-center justify-between gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="mt-2 w-full flex-1 p-4 min-h-screen overflow-x-hidden">
          {/* Add overflow-x-hidden */}
          {children}
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
