import type { Metadata } from "next";
import { CheckCircle2, FileSearch2, FileX2, Laptop, ShieldCheck } from "lucide-react";
import { RemovalForm } from "@/components/removal-form";

export const metadata: Metadata = {
  title: "Remove My Information",
  description: "Search for your personal information online and prepare a full report of what was found and removed.",
};

const steps = [
  {
    icon: FileSearch2,
    title: "Search for your information",
    text: "MyBeSix prepares checks using your full name, email address, and phone number.",
  },
  {
    icon: FileX2,
    title: "Process removal activity",
    text: "The removal sequence reviews visible listings and prepares the available removal actions.",
  },
  {
    icon: CheckCircle2,
    title: "Download the full report",
    text: "After processing, download the report package showing the information located and the recorded removal status.",
  },
];

export default function DataRemovalPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-[#f3f9fd] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#1261a0]">
              <ShieldCheck className="size-4" /> Personal information removal
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[1.03] tracking-[-0.055em] text-[#0b1f33] sm:text-6xl">
              Find where your information appears and prepare its removal.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Enter your name, email, and phone number. MyBeSix will run the removal-search experience and prepare a downloadable report package showing what was located and removed.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-[#fffaf0] p-4 text-sm leading-6 text-amber-950">
              <Laptop className="mt-0.5 size-5 shrink-0" />
              <p><strong>Desktop or laptop required.</strong> The removal search does not run on mobile phones or tablets.</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Free to use", "40–90 second process", "Downloadable report"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                  <CheckCircle2 className="size-4 text-[#1261a0]" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div id="removal-form" className="scroll-mt-28">
            <RemovalForm />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1261a0]">How removal works</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#0b1f33]">One simple process from search to report.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#eef6fb] text-[#1261a0]"><step.icon className="size-6" /></span>
                  <span className="text-sm font-black tracking-[0.18em] text-slate-300">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-xl font-black tracking-[-0.03em] text-[#0b1f33]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
