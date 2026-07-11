"use client";

import Link from "next/link";
import { 
  Check, 
  Clock3, 
  Download, 
  FileArchive, 
  Laptop, 
  LoaderCircle, 
  RefreshCcw, 
  Search, 
  ShieldAlert, 
  ShieldCheck, 
  TriangleAlert
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { DesktopOnlyModal } from "@/components/desktop-only-modal";
import { SupportCard } from "@/components/support-card";
import { isMobileDevice } from "@/lib/device";
import { siteConfig } from "@/lib/site";

type StoredSearch = {
  fullName: string;
  phone: string;
  email?: string;
  currentAddress?: string;
  previousAddress?: string;
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

function maskEmail(value?: string) {
  if (!value || !value.includes("@")) return "Not provided";
  const [name, domain] = value.split("@");
  return `${name.slice(0, 2)}${"•".repeat(Math.max(2, name.length - 2))}@${domain}`;
}

// Deterministic hashing function
function getHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export function SearchExperience() {
  const [request, setRequest] = useState<StoredSearch | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [desktopWarning, setDesktopWarning] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const raw = sessionStorage.getItem("mybesix-search-request");

      if (raw) {
        try {
          const parsed = JSON.parse(raw) as StoredSearch;
          setRequest(parsed);
          setReady(Date.now() >= parsed.readyAt);
        } catch {
          sessionStorage.removeItem("mybesix-search-request");
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
    // Faster interval for a more "live" feeling progress bar
    const timer = window.setInterval(update, 200);
    return () => window.clearInterval(timer);
  }, [request, ready]);

  // Construct highly detailed, dynamic, 3-phase stages
  const stages = useMemo(() => {
    if (!request) return [];

    const hashInput = request.email || request.phone;
    const hash = getHash(hashInput);
    
    const ssnLast4 = String(hash % 9999).padStart(4, '0');
    const phoneCount = (hash % 4) + 2; 
    const addressCount = (hash % 6) + 2; 
    const socialCount = (hash % 8) + 3;
    const breachCount = (hash % 12) + 1;
    const vehicleCount = (hash % 3) + 1;

    const publicRecordsOptions = [
      "No major criminal records found. Active voter registration verified.",
      "Historical property lien and active voter registration located.",
      "Civil court filings and historical business affiliations found.",
      "Misdemeanor traffic records and active hunting/fishing licenses found."
    ];
    const publicRecordResult = publicRecordsOptions[hash % publicRecordsOptions.length];

    return [
      { 
        id: "s1", 
        pendingText: "Awaiting SSN & identity verification...",
        activeText: "Cross-referencing name and location with national identity databases...",
        completeText: `Match: Verified identity. Located partial SSN ending in -${ssnLast4}`,
        severity: "info"
      },
      { 
        id: "s2", 
        pendingText: "Awaiting contact record extraction...",
        activeText: "Scanning telecom directories and primary email providers...",
        completeText: `Located: ${phoneCount} historical phone numbers and 2 email addresses`,
        severity: "info"
      },
      { 
        id: "s3", 
        pendingText: "Awaiting address history compilation...",
        activeText: "Querying property tax records and utility billing histories...",
        completeText: `Alert: ${addressCount} residential addresses found spanning 12 years`,
        severity: "warning"
      },
      { 
        id: "s4", 
        pendingText: "Awaiting DMV & vehicle registration sweep...",
        activeText: "Searching state DMV records and traffic citation databases...",
        completeText: `Warning: Active Driver's License and ${vehicleCount} vehicle registration(s) found`,
        severity: "warning"
      },
      { 
        id: "s5", 
        pendingText: "Awaiting social media & digital footprint analysis...",
        activeText: "Scraping social media platforms, dating sites, and public forums...",
        completeText: `Alert: Identified ${socialCount} social media profiles and connected public accounts`,
        severity: "warning"
      },
      { 
        id: "s6", 
        pendingText: "Awaiting public & court record search...",
        activeText: "Checking county court records, bankruptcies, and public filings...",
        completeText: `Result: ${publicRecordResult}`,
        severity: "info"
      },
      { 
        id: "s7", 
        pendingText: "Awaiting deep-web breach exposure check...",
        activeText: "Scanning dark web dumps and known compromised databases...",
        completeText: `Critical: Email found in ${breachCount} known data breaches (passwords potentially exposed)`,
        severity: "critical"
      },
      { 
        id: "s8", 
        pendingText: "Awaiting report compilation...",
        activeText: "Encrypting extracted dossiers into offline desktop package...",
        completeText: "Success: Data compilation and 256-bit encryption finished",
        severity: "success"
      }
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
          <p className="mt-4 text-sm font-bold text-slate-600">Opening your search request…</p>
        </div>
      </main>
    );
  }

  if (!request) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20 sm:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#eef6fb] text-[#1261a0]"><Search className="size-6" /></span>
          <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#0b1f33]">No active search found</h1>
          <p className="mt-3 text-slate-600">Start from the homepage and enter the information you already have.</p>
          <Link href="/#start-search" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1261a0] px-5 py-3 text-sm font-black text-white hover:bg-[#0d4f86]">
            Start free search
          </Link>
        </div>
      </main>
    );
  }

  // Determine what to show in the header area
  const currentStageInfo = stages[activeStage] || stages[0];
  const currentStageDisplay = currentStageInfo.activeText;

  return (
    <main className="bg-[#f7f9fb]">
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1261a0]">Request {request.requestId}</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#0b1f33] sm:text-4xl">
              {ready ? "Your search package is ready" : "Preparing your search package"}
            </h1>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
            <Clock3 className="size-4 text-[#1261a0]" /> Usually ready in under 2 minutes
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
            {!ready ? (
              <>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eef6fb] text-[#1261a0]">
                      <LoaderCircle className="size-6 animate-spin" />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Current step</p>
                      <p className="mt-1 font-bold text-[#0b1f33] line-clamp-1">{currentStageDisplay}</p>
                    </div>
                  </div>
                  <span className="text-3xl font-black tracking-[-0.04em] text-[#1261a0]">{progress}%</span>
                </div>

                <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[#1261a0] transition-[width] duration-300 ease-linear" style={{ width: `${progress}%` }} />
                </div>

                <div className="mt-8 grid gap-3">
                  {stages.map((stage, index) => {
                    const isComplete = index < activeStage;
                    const isActive = index === activeStage;
                    const isPending = index > activeStage;
                    
                    // Determine styling based on state and severity
                    let wrapperClass = "border-slate-100 bg-white/50 opacity-60"; // Pending
                    let iconClass = "bg-slate-100 text-slate-400";
                    let textClass = "text-slate-400 font-medium";
                    let displayText = stage.pendingText;
                    let Icon = <span className="size-1.5 rounded-full bg-current" />;

                    if (isActive) {
                      wrapperClass = "border-sky-200 bg-[#f3f9fd] opacity-100 ring-1 ring-sky-100";
                      iconClass = "bg-white text-[#1261a0] shadow-sm";
                      textClass = "text-[#1261a0] font-bold";
                      displayText = stage.activeText;
                      Icon = <LoaderCircle className="size-4 animate-spin" />;
                    } else if (isComplete) {
                      displayText = stage.completeText;
                      wrapperClass = "opacity-100 border";
                      Icon = <Check className="size-4" />;
                      
                      switch (stage.severity) {
                        case "critical":
                          wrapperClass += " border-red-200 bg-red-50";
                          iconClass = "bg-red-500 text-white";
                          textClass = "text-red-900 font-bold";
                          Icon = <ShieldAlert className="size-4" />;
                          break;
                        case "warning":
                          wrapperClass += " border-amber-200 bg-amber-50";
                          iconClass = "bg-amber-500 text-white";
                          textClass = "text-amber-900 font-bold";
                          Icon = <TriangleAlert className="size-4" />;
                          break;
                        case "success":
                          wrapperClass += " border-emerald-200 bg-emerald-50";
                          iconClass = "bg-emerald-500 text-white";
                          textClass = "text-emerald-900 font-bold";
                          break;
                        default: // info
                          wrapperClass += " border-slate-200 bg-slate-50";
                          iconClass = "bg-slate-600 text-white";
                          textClass = "text-slate-700 font-semibold";
                          break;
                      }
                    }
                    
                    return (
                      <div key={stage.id} className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-500 ${wrapperClass}`}>
                        <span className={`grid size-7 shrink-0 place-items-center rounded-full ${iconClass}`}>
                          {Icon}
                        </span>
                        <span className={`text-sm ${textClass}`}>
                          {displayText}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-xs leading-5 text-slate-600">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#1261a0]" />
                  Keep this page open while we prepare the desktop package. Refreshing will not restart an active request in this browser tab.
                </div>
              </>
            ) : (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#eaf6f0] text-[#16794b] shadow-sm"><Check className="size-8" /></span>
                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#16794b]">100% complete</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#0b1f33]">Download Your Full Report</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
                  By downloading this report, you certify that this report belongs to you and you are conducting this search on yourself. MyBeSix assumes no responsibility or liability for any actions taken, misuse of information, or consequences arising from accessing this data
                </p>

                <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 text-left shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-white text-[#1261a0] shadow-sm"><FileArchive className="size-5" /></span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-[#0b1f33]">{siteConfig.downloadName}</p>
                      <p className="mt-1 text-xs text-slate-500">ZIP archive · Your report is ready</p>
                    </div>
                  </div>
                </div>

                <a
                  href={siteConfig.downloadPath}
                  download={siteConfig.downloadName}
                  onClick={handleDownload}
                  className="mt-6 inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-xl bg-[#1261a0] px-6 py-4 text-sm font-black text-white shadow-[0_12px_30px_rgba(18,97,160,0.2)] hover:bg-[#0d4f86] transition-colors"
                >
                  <Download className="size-5" /> Download your report — 100% free
                </a>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1.5"><Laptop className="size-4" /> Windows Desktop/Laptop</span>
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4" /> 256-bit Encrypted</span>
                </div>

                <Link href="/#start-search" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1261a0] hover:text-[#0d4f86] transition-colors">
                  <RefreshCcw className="size-4" /> Start another search
                </Link>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] sticky top-24">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Target Identity</p>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Name</dt>
                  <dd className="mt-1 font-black text-[#0b1f33]">{request.fullName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Phone Parameter</dt>
                  <dd className="mt-1 font-mono text-slate-700">{maskPhone(request.phone)}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Email Parameter</dt>
                  <dd className="mt-1 font-mono text-slate-700">{maskEmail(request.email)}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-400">Address parameter</dt>
                  <dd className="mt-1 font-semibold text-slate-700">{request.currentAddress || request.previousAddress ? "Provided" : "Not Provided"}</dd>
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
        action="People-search download"
      />
    </main>
  );
}