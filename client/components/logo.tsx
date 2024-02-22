import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import React from "react";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});


function Logo() {
  return (
    <Link
      href={"/"}
    >
      <div className="hover:opacity-75 transition items-center gap-x-2 flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={30}
          width={30}
        />
        <p className={cn(
          "text-lg text-foreground dark:text-slate-100 pt-1",
          headingFont.className,
        )}>
          Musicly
        </p>
      </div>
    </Link>
  );
}

export default Logo;