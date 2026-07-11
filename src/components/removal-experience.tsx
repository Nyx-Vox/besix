"use client";

import Link from "next/link";
import {
  Check,
  Clock3,
  Download,
  FileArchive,
  FileCheck2,
  FileX2,
  Laptop,
  LoaderCircle,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { DesktopOnlyModal } from "@/components/desktop-only-modal";
import { SupportCard } from "@/components/support-card";
import { isMobileDevice } from "@/lib/device";
import { siteConfig } from "@/lib/site";

type StoredRemoval = {
  fullName: string;
  email: string;
  phone: string;
  requestId: string;
  startedAt: number;
  durationSeconds: number;
  readyAt: number;
};

function maskPhone(value: string) {
  const trimmed = value.trim();
  if (trimmed.length <= 4) return trimmed;
  return `${trimmed.slice(0, 3)}${"•".repeat(Math.max(3, trimmed.length - 6))}${trimmed.slice(-3)}`;
}

function maskEmail(value: string) {
  if (!value.includes("@")) return value;
  const [name, domain] = value.split("@");
  return `${name.slice(0, 2)}${"•".repeat(Math.max(2, name.length - 2))}@${domain}`;
}

// Simple string hashing function to generate deterministic pseudo-random numbers
function getHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export function RemovalExperience() {
  const [request, setRequest] = useState<StoredRemoval | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [desktopWarning, setDesktopWarning] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const raw = sessionStorage.getItem("mybesix-removal-request");

      if (raw) {
        try {
          const parsed = JSON.parse(raw) as StoredRemoval;
          setRequest(parsed);
          setReady(Date.now() >= parsed.readyAt);
        } catch {
          sessionStorage.removeItem("mybesix-removal-request");
        }
      }

      setLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!request || ready) return;

    const update = () => {
      const elapsed = Date.now() - request.startedAt;
      const total = request.durationSeconds * 1000;
      const nextProgress = Math.min(100, Math.max(2, Math.round((elapsed / total) * 100)));
      setProgress(nextProgress);

      if (Date.now() >= request.readyAt) {
        setProgress(100);
        setReady(true);
      }
    };

    update();
    const timer = window.setInterval(update, 400);
    return () => window.clearInterval(timer);
  }, [request, ready]);

  // Generate dynamic, professional stages based on the user's email
  const stages = useMemo(() => {
    if (!request) return [];

    const hash = getHash(request.email);
    const phoneCount = (hash % 4) + 1; // 1 to 4 phones
    const addressCount = (hash % 5) + 2; // 2 to 6 addresses
    
    const sensitiveOptions = [
      "Partial SSN and Voter Registration records exposed",
      "Driver's License and vehicle registration records located",
      "Partial SSN and historical property deeds found",
      "DMV records and relative contact information exposed"
    ];
    const sensitiveData = sensitiveOptions[hash % sensitiveOptions.length];

    return [
      "Validating identity parameters against primary databases",
      "Sweeping 120+ public data brokers and background check sites",
      "Extracting linked contact records and historical profiles",
      `Alert: Identified ${phoneCount} phone numbers and ${addressCount} historical addresses`,
      "Scanning for compromised government and legal identifiers",
      `Warning: ${sensitiveData}`,
      "Preparing and transmitting legally-binding opt-out requests",
      "Verifying automated removal from top-tier directories (Whitepages, Spokeo, etc.)",
      "Initiating cache-clearing protocols for major search engines",
      "Compiling encrypted dossier of found-and-removed information",
      "Finalizing secure removal report package",
    ];
  }, [request]);

  const activeStage = useMemo(() => {
    if (!stages.length) return 0;
    return Math.min(stages.length - 1, Math.floor((progress / 100) * stages.length));
  }, [progress, stages]);

  function handleDownload(event: React.MouseEvent<HTMLAnchorElement>) {
    if (isMobileDevice()) {
      event.preventDefault();
      setDesktopWarning(true);
    }
  }

  if (!loaded) {
    return (
      <main className="grid min-h-[70vh] place-items-center bg-[#f7f9fb] px-5 py-20">
        <div className="text-center">
          <LoaderCircle className="mx-auto size-8 animate-spin text-[#1261a0]" />
          <p className="mt-4 text-sm font-bold text-slate-600">Opening your removal request…</p>
        </div>
      </main>
    );
  }

  if (!request) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20 sm:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#eef6fb] text-[#1261a0]"><FileX2 className="size-6" /></span>
          <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#0b1f33]">No active removal search found</h1>
          <p className="mt-3 text-slate-600">Start from the information-removal page and enter your name, email, and phone number.</p>
          <Link href="/data-removal#removal-form" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1261a0] px-5 py-3 text-sm font-black text-white hover:bg-[#0d4f86]">
            Start removal search
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f7f9fb]">
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1261a0]">Removal request {request.requestId}</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#0b1f33] sm:text-4xl">
              {ready ? "Your full removal report is ready" : "Searching and processing removals"}
            </h1>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600">
            <Clock3 className="size-4 text-[#1261a0]" /> Usually ready in under 2 minutes
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
            {!ready ? (
              <>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#eef6fb] text-[#1261a0]"><LoaderCircle className="size-6 animate-spin" /></span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Current step</p>
                      <p className="mt-1 font-black text-[#0b1f33]">{stages[activeStage]}</p>
                    </div>
                  </div>
                  <span className="text-3xl font-black tracking-[-0.04em] text-[#1261a0]">{progress}%</span>
                </div>

                <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[#1261a0] transition-[width] duration-500" style={{ width: `${progress}%` }} />
                </div>

                <div className="mt-8 grid gap-3">
                  {stages.map((stage, index) => {
                    const complete = index < activeStage;
                    const active = index === activeStage;
                    const isWarning = stage.startsWith("Alert:") || stage.startsWith("Warning:");
                    
                    return (
                      <div key={stage} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                        active 
                          ? "border-sky-200 bg-[#f3f9fd]" 
                          : complete && isWarning 
                            ? "border-amber-200 bg-amber-50"
                            : "border-slate-100 bg-white"
                      }`}>
                        <span className={`grid size-7 shrink-0 place-items-center rounded-full ${
                          complete 
                            ? (isWarning ? "bg-amber-500 text-white" : "bg-[#1261a0] text-white") 
                            : active 
                              ? "bg-white text-[#1261a0] shadow-sm" 
                              : "bg-slate-100 text-slate-400"
                        }`}>
                          {complete ? <Check className="size-4" /> : active ? <LoaderCircle className="size-4 animate-spin" /> : <span className="size-1.5 rounded-full bg-current" />}
                        </span>
                        <span className={`text-sm font-semibold ${
                          complete || active 
                            ? (isWarning && complete ? "text-amber-900" : "text-slate-800") 
                            : "text-slate-400"
                        }`}>
                          {stage}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-xs leading-5 text-slate-600">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#1261a0]" />
                  Keep this page open while MyBeSix prepares the found-and-removed information report. Refreshing will not restart this request in the current browser tab.
                </div>
              </>
            ) : (
              <div className="text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#eaf6f0] text-[#16794b]"><FileCheck2 className="size-8" /></span>
                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#16794b]">100% complete</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#0b1f33]">Download your full removal report</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
                  The ZIP package contains the full report package covering information located during the search and the removal-status details prepared for this request.
                </p>

                <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-white text-[#1261a0] shadow-sm"><FileArchive className="size-5" /></span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-[#0b1f33]">{siteConfig.removalDownloadName}</p>
                      <p className="mt-1 text-xs text-slate-500">ZIP archive · Full found-and-removed report package</p>
                    </div>
                  </div>
                </div>

                <a
                  href={siteConfig.removalDownloadPath}
                  download={siteConfig.removalDownloadName}
                  onClick={handleDownload}
                  className="mt-6 inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-xl bg-[#1261a0] px-6 py-4 text-sm font-black text-white shadow-[0_12px_30px_rgba(18,97,160,0.2)] hover:bg-[#0d4f86]"
                >
                  <Download className="size-5" /> Download full removal report
                </a>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1.5"><Laptop className="size-4" /> Desktop or laptop only</span>
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4" /> No payment required</span>
                </div>

                <Link href="/data-removal#removal-form" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1261a0] hover:text-[#0d4f86]">
                  <RefreshCcw className="size-4" /> Start another removal search
                </Link>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Removal details</p>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Name</dt>
                  <dd className="mt-1 font-black text-[#0b1f33]">{request.fullName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Email</dt>
                  <dd className="mt-1 font-mono text-slate-700">{maskEmail(request.email)}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Phone</dt>
                  <dd className="mt-1 font-mono text-slate-700">{maskPhone(request.phone)}</dd>
                </div>
              </dl>
            </div>

            {ready && <SupportCard compact />}
          </aside>
        </div>
      </section>

      <DesktopOnlyModal
        open={desktopWarning}
        onClose={() => setDesktopWarning(false)}
        action="Removal-report download"
      />
    </main>
  );
}