"use client";

import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#Projects", label: "Projects" },
  { href: "/Resume", label: "Contact" },
  { href: "/#About", label: "About" },
  { href: "/#Contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            Sam Fredrik Fakhraee
          </span>
          <span className="text-xs text-slate-400">Data Engineer</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace("/#", ""));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-emerald-400 ${
                  isActive ? "text-emerald-400" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-emerald-400"
          >
            <Link
              href="https://github.com/SamFakh"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-emerald-400"
          >
            <Link
              href="https://www.linkedin.com/in/sam-fakhraee-a0a46b317"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
