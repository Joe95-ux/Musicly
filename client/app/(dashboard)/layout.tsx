import ThemeSwitcher from "@/components/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import Logo from "@/components/logo";
import { MobileSidebar } from "@/components/mobile-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen min-w-full bg-background max-h-screen">
      <div className="h-[65px] md:pl-56 fixed inset-y-0 w-full z-50">
        <nav className="flex justify-between items-center border-b border-border px-4 py-2">
          <MobileSidebar />
          <div></div>
          <div className="flex gap-4 items-center">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </nav>
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}
