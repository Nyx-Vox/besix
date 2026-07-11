"use client";

import { Check, Copy, HeartHandshake, QrCode, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/site";

export function SupportCard({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const wallet = siteConfig.usdt.walletAddress;

  async function copyAddress() {
    if (!wallet) return;
    await navigator.clipboard.writeText(wallet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className={`rounded-[28px] border border-slate-200 bg-white ${compact ? "p-6" : "p-7 sm:p-9"} shadow-[0_18px_55px_rgba(15,23,42,0.08)]`}>
      <div className="flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#fff7e8] text-[#b66a00]">
          <HeartHandshake className="size-6" />
        </span>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b66a00]">Optional support</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#0b1f33]">Help keep MyBeSix free</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Voluntary USDT support helps maintain the platform. It does not affect search results, access, or processing time.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-[140px_1fr] sm:items-center">
        <div className="grid aspect-square place-items-center rounded-2xl border border-slate-200 bg-[#f8fafc] p-3">
          {wallet ? (
            <QRCodeSVG value={wallet} size={116} bgColor="#f8fafc" fgColor="#0b1f33" level="M" />
          ) : (
            <div className="text-center text-slate-400">
              <QrCode className="mx-auto size-12" />
              <p className="mt-2 text-[11px] font-bold">QR appears after wallet setup</p>
            </div>
          )}
        </div>

        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Asset</p>
              <p className="mt-1 text-sm font-black text-[#0b1f33]">USDT</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Network</p>
              <p className="mt-1 text-sm font-black text-[#0b1f33]">{siteConfig.usdt.network}</p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Wallet address</p>
            <p className="mt-2 break-all font-mono text-xs leading-5 text-slate-700">
              {wallet || "Add NEXT_PUBLIC_USDT_WALLET_ADDRESS to your environment file."}
            </p>
          </div>

          <button
            type="button"
            disabled={!wallet}
            onClick={copyAddress}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#1261a0] px-4 py-3 text-sm font-black text-[#1261a0] transition hover:bg-[#eef6fb] disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Address copied" : "Copy wallet address"}
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
        <TriangleAlert className="mt-0.5 size-4 shrink-0" />
        Send only USDT on the exact network displayed above. Blockchain transfers are generally irreversible.
      </div>
    </div>
  );
}
