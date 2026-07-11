import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1261a0]">404</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-[#0b1f33]">This page could not be found.</h1>
        <p className="mt-4 text-slate-600">The link may be outdated or the page may have moved.</p>
        <Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1261a0] px-5 py-3 text-sm font-black text-white hover:bg-[#0d4f86]">
          <ArrowLeft className="size-4" /> Return home
        </Link>
      </div>
    </main>
  );
}
