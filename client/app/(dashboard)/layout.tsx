import ThemeSwitcher from "@/components/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import { Input } from "@/components/ui/input";
import { Search, Music } from "lucide-react";
import Logo from "@/components/logo";
import { MobileSidebar } from "@/components/mobile-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen min-w-full bg-background max-h-screen">
      <div className="h-[65px] md:pl-80 fixed inset-y-0 w-full z-50">
        <nav className="flex justify-between items-center border-b border-border px-4 py-4">
          <MobileSidebar />
          <div className="hidden md:flex w-72 bg-transparent dark:bg-transparent relative pointer-events-auto">
            <button className="w-full lg:flex items-center text-sm leading-6 transition-colors text-slate-400 rounded-md ring-1 ring-cyan-300/20 shadow-sm py-1.5 pl-2 pr-3 hover:ring-cyan-300/40 dark:bg-inherit dark:highlight-white/5 dark:hover:bg-inherit">
              <Music size={18} className="mr-6"/>
              Search Musicly...
              <span className="ml-auto pl-3 flex-none text-xs font-semibold">
              <Search size={18}/>
              </span>
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </nav>
      </div>
      <div className="hidden md:flex h-full w-1/4 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}
