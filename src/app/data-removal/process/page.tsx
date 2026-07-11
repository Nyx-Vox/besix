import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { RemovalExperience } from "@/components/removal-experience";

export const metadata: Metadata = {
  title: "Processing Removal Request | MyBeSix Privacy",
  description: "Securely tracking and processing your personal information removal request across data brokers and public directories.",
  robots: { index: false, follow: false }, // Keeps the active processing page out of search engines
};

export default function RemovalProcessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fb]">
      {/* Minimal, professional secure header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="grid size-8 place-items-center rounded-lg bg-[#1261a0] text-white">
              <Shield className="size-4" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-black tracking-tight text-[#0b1f33]">
              MyBeSix
            </span>
          </Link>
          
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            256-bit Secure Connection
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="flex-1">
        <RemovalExperience />
      </div>

      {/* Minimal professional footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} MyBeSix Privacy Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
            <Link href="/privacy" className="transition-colors hover:text-[#1261a0]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#1261a0]">
              Terms of Service
            </Link>
            <Link href="/support" className="transition-colors hover:text-[#1261a0]">
              Support Center
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}