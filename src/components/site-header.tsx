"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-slate-100 text-[#0b1f33]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0b1f33]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#start-search"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1261a0] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_26px_rgba(18,97,160,0.2)] transition hover:bg-[#0d4f86] focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            <Search className="size-4" />
            Start free search
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-slate-200 text-[#0b1f33] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#start-search"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1261a0] px-5 py-3 text-sm font-bold text-white"
            >
              <Search className="size-4" />
              Start free search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
