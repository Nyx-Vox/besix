"use client";

import { Laptop, Monitor, Smartphone, X } from "lucide-react";

export function DesktopOnlyModal({
  open,
  onClose,
  action = "This search",
}: {
  open: boolean;
  onClose: () => void;
  action?: string;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/50 p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-only-title"
    >
      <div className="w-full max-w-md rounded-[26px] border border-slate-200 bg-white p-6 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-[#fff7e8] text-[#b66a00]">
            <Smartphone className="size-6" />
          </span>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
            aria-label="Close desktop-only warning"
          >
            <X className="size-4" />
          </button>
        </div>

        <h2 id="desktop-only-title" className="mt-5 text-2xl font-black tracking-[-0.035em] text-[#0b1f33]">
          Desktop or laptop required
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {action} is only available on a desktop or laptop computer. It does not run on mobile phones or tablets.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-[#1261a0] shadow-sm">
              <Monitor className="size-4" />
            </span>
            <div>
              <p className="text-sm font-black text-[#0b1f33]">Open MyBeSix on a computer</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Use a Windows desktop or laptop, enter the details again, and start the search from there.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1261a0] px-5 py-3.5 text-sm font-black text-white hover:bg-[#0d4f86] focus:outline-none focus:ring-4 focus:ring-sky-100"
        >
          <Laptop className="size-4" /> I understand
        </button>
      </div>
    </div>
  );
}
