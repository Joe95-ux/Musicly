"use client";

import { Home, Search, LibraryBig, Plus, MenuSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Search,
    label: "Search",
    href: "/search",
  },
];

const customRoutes = [
  {
    icon: LibraryBig,
    label: "Library",
    href: "/library",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
      <Separator />
      {customRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
