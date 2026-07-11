import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Download, 
  FileArchive, 
  FileText,
  FileX2, 
  Laptop, 
  Search, 
  ShieldCheck,
  ShieldAlert
} from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "How It Works | MyBeSix Privacy",
  description: "Learn how MyBeSix safely compiles comprehensive people-search PDF reports and executes information-removal requests directly from your desktop.",
};

const searchSteps = [
  { 
    icon: Search, 
    title: "Submit search parameters", 
    text: "Enter the subject's full name and phone number. To narrow the search, you can also supply an email address or historical addresses if available." 
  },
  { 
    icon: ShieldCheck, 
    title: "Confirm responsible use", 
    text: "Verify that your search is strictly authorised and will not be used to harass, threaten, stalk, discriminate against, or harm any individual." 
  },
  { 
    icon: FileText, 
    title: "System compilation", 
    text: "Our system sweeps public directories and aggregates the found data, securely formatting it into a comprehensive PDF dossier over 40–90 seconds." 
  },
  { 
    icon: Download, 
    title: "Download your PDF report", 
    text: "Securely download a compressed ZIP archive containing your final PDF search report and a brief guide on how to interpret the compiled public records." 
  },
];

const removalSteps = [
  { 
    icon: FileX2, 
    title: "Provide your targeted data", 
    text: "Input the exact full name, email address, and phone number that you want our system to track down and process for removal." 
  },
  { 
    icon: ShieldCheck, 
    title: "Verify your identity", 
    text: "Legally confirm that the submitted details belong to you personally, or to an individual you are legally authorised to represent." 
  },
  { 
    icon: Search, 
    title: "Removal processing", 
    text: "MyBeSix initiates a 40–90-second sequence, sweeping data brokers, preparing opt-out requests, and logging the actions taken." 
  },
  { 
    icon: Download, 
    title: "Retrieve removal dossier", 
    text: "Download your encrypted ZIP package containing a detailed PDF report that outlines exactly what was found and the current removal status." 
  },
];

function StepGrid({ steps, accentColor }: { steps: typeof searchSteps, accentColor: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {steps.map((step, index) => (
        <article 
          key={step.title} 
          className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)]"
        >
          <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${accentColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
          
          <div className="flex items-start justify-between gap-4">
            <span className="grid size-14 place-items-center rounded-2xl bg-slate-50 text-[#1261a0] ring-1 ring-slate-100 transition-colors group-hover:bg-[#eef6fb]">
              <step.icon className="size-6" />
            </span>
            <span className="text-sm font-black tracking-[0.15em] text-slate-200 transition-colors group-hover:text-slate-300">
              STEP 0{index + 1}
            </span>
          </div>
          
          <h3 className="mt-8 text-xl font-black tracking-[-0.03em] text-[#0b1f33]">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <PageShell
      eyebrow="How it works"
      title="Secure data retrieval and removal, packaged into clean PDF reports."
      description="Whether you are running a background check or scrubbing your own digital footprint, MyBeSix delivers professional, easy-to-read PDF reports directly to your computer."
    >
      {/* Desktop-Only Warning Banner */}
      <div className="mb-12 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 text-sm leading-7 text-amber-900 shadow-sm">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
          <Laptop className="size-5" />
        </span>
        <div>
          <p className="font-bold text-amber-950">Desktop environment required</p>
          <p className="mt-1 text-amber-800/80">
            Due to the secure nature of the ZIP report downloads, mobile devices are not supported. You may fill out the forms on a phone, but you must switch to a Windows or macOS desktop computer to initiate the actual search and download your reports.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <section className="relative">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-px flex-1 bg-slate-200"></div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#1261a0] shadow-sm">
            <Search className="size-3.5" /> People Search
          </span>
          <div className="flex h-px flex-1 bg-slate-200"></div>
        </div>
        
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0b1f33]">Generate a background report.</h2>
          <p className="mt-3 text-slate-500">Compile public contact details and records into a single PDF document.</p>
        </div>
        
        <StepGrid steps={searchSteps} accentColor="from-[#1261a0] to-[#38bdf8]" />
      </section>

      {/* Removal Section */}
      <section className="relative mt-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-px flex-1 bg-slate-200"></div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#16794b] shadow-sm">
            <ShieldAlert className="size-3.5" /> Information Removal
          </span>
          <div className="flex h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0b1f33]">Scrub your digital footprint.</h2>
          <p className="mt-3 text-slate-500">Track down your exposed data and generate an actioned removal status PDF.</p>
        </div>

        <StepGrid steps={removalSteps} accentColor="from-[#16794b] to-[#34d399]" />
      </section>

      {/* Bottom CTA Block */}
      <div className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0b1f33] to-[#12395d] p-10 text-white shadow-2xl sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">Ready to run your report?</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Start your free search right now. No credit card, subscription, or account registration is required to process and download your requested PDF packages.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <Link 
              href="/#start-search" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#0b1f33] transition-all hover:bg-sky-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:w-auto"
            >
              Start people search <ArrowRight className="size-4" />
            </Link>
            <Link 
              href="/data-removal#removal-form" 
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-black text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
            >
              Remove my information <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}