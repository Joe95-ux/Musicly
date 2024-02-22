"use client";

import { Home, Search, List, LibraryBig, Plus, MenuSquare } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    label: " Your Library",
    href: "/library",
  },
];

const badges = [
  { type: "playlist", label: "Playlists" },
  { type: "album", label: "Albums" },
  { type: "artist", label: "Artists" },
];

export const SidebarRoutes = () => {
  let href = "Liked Songs";

  const pathname = usePathname();
  const router = useRouter();
  const isActiveList =
    (pathname === "/liked-songs" && href === "/liked-songs") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
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
      <Separator className="mb-4" />
      <div className="flex items-center justify-between text-slate-500 text-sm font-[500] p-2">
        <div className="flex items-center gap-x-4">
          <LibraryBig size={22} className="text-slate-500" />
          Your Library
        </div>
        <div className="p-2 transition ease-in-out duration-200 hover:rounded hover:bg-slate-300/20">
          <Plus size={22} className="stroke-slate-500 hover:stroke-cyan-500" />
        </div>
      </div>
      <div className="p-2 mb-4 flex items-center gap-x-4 text-slate-500 text-sm font-[400]">
        {badges.map(({ type, label }) => (
          <Badge
            key={type}
            variant="outline"
            className="cursor-pointer hover:bg-slate-300/20"
          >
            {label}
          </Badge>
        ))}
      </div>

      <div className="p-2 mb-4 flex items-center justify-between text-slate-500 text-sm font-[400]">
        <Search size={20} />
        <div className="flex items-center gap-x-4 transition duration-300 ease-in-out hover:text-slate-300">
          Recents
          <List size={20} />
        </div>
      </div>
      <div className="flex gap-y-2 flex-col mb-2">
        <div
          className={cn(
            "flex items-center gap-x-4 w-full text-slate-500 text-sm rounded-md p-2 transition duration-200 hover:text-slate-600 hover:rounded-md hover:bg-slate-300/20",
            isActiveList &&
              "text-sky-700 rounded-md bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <Image src="/james-authur.jpg" alt="album-cover" height={50} width={50} className="rounded"/>
          <div className="flex flex-col">
            <h4 className="text-base text-foreground font-medium ">Liked Songs</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-normal"> <span>Playlist</span> . <span>46 Songs</span></p>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center gap-x-4 w-full text-slate-500 text-sm rounded-md p-2 transition duration-200 hover:text-slate-600 hover:rounded-md hover:bg-slate-300/20",
            isActiveList &&
              "text-sky-700 rounded-md bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <Image src="/free-spirit.jpeg" alt="album-cover" height={50} width={50} className="rounded"/>
          <div className="flex flex-col">
            <h4 className="text-base text-foreground font-medium ">Liked Songs</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-normal"> <span>Playlist</span> . <span>46 Songs</span></p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-x-4 w-full text-slate-500 text-sm rounded-md p-2 transition duration-200 hover:text-slate-600 hover:rounded-md hover:bg-slate-300/20",
            isActiveList &&
              "text-sky-700 rounded-md bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <Image src="/james-authur.jpg" alt="album-cover" height={50} width={50} className="rounded"/>
          <div className="flex flex-col">
            <h4 className="text-foreground text-base font-medium ">Liked Songs</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-normal"> <span>Playlist</span> . <span>46 Songs</span></p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-x-4 w-full text-slate-500 text-sm rounded-md p-2 transition duration-200 hover:text-slate-600 hover:rounded-md hover:bg-slate-300/20",
            isActiveList &&
              "text-sky-700 rounded-md bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <Image src="/free-spirit.jpeg" alt="album-cover" height={50} width={50} className="rounded"/>
          <div className="flex flex-col">
            <h4 className="text-base text-foreground font-medium ">Liked Songs</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-normal"> <span>Playlist</span> . <span>46 Songs</span></p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-x-4 w-full text-slate-500 text-sm rounded-md p-2 transition duration-200 hover:text-slate-600 hover:rounded-md hover:bg-slate-300/20",
            isActiveList &&
              "text-sky-700 rounded-md bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <Image src="/free-spirit.jpeg" alt="album-cover" height={50} width={50} className="rounded"/>
          <div className="flex flex-col">
            <h4 className="text-base text-foreground font-medium ">Liked Songs</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-normal"> <span>Playlist</span> . <span>46 Songs</span></p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-x-4 w-full text-slate-500 text-sm rounded-md p-2 transition duration-200 hover:text-slate-600 hover:rounded-md hover:bg-slate-300/20",
            isActiveList &&
              "text-sky-700 rounded-md bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <Image src="/james-authur.jpg" alt="album-cover" height={50} width={50} className="rounded"/>
          <div className="flex flex-col">
            <h4 className="text-base text-foreground font-medium ">Liked Songs</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-normal"> <span>Playlist</span> . <span>46 Songs</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
