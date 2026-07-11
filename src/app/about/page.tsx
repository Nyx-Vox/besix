import type { Metadata } from "next";
import { CheckCircle2, Search, ShieldCheck, Users } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about MyBeSix people-search and information-removal experiences.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About MyBeSix"
      title="Search for information or prepare removal of your own records."
      description="MyBeSix provides two clear desktop-only journeys: preparing the official people-search package and preparing a report of personal information found and removed."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { icon: Search, title: "Two clear processes", text: "Separate journeys for people-search preparation and personal-information removal." },
          { icon: Users, title: "Free access", text: "Neither search requires a subscription payment before the download becomes available." },
          { icon: ShieldCheck, title: "Responsible use", text: "Users must confirm a lawful purpose and prohibited uses are clearly stated." },
        ].map((item) => (
          <article key={item.title} className="rounded-[26px] border border-slate-200 p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-[#eef6fb] text-[#1261a0]"><item.icon className="size-5" /></span>
            <h2 className="mt-5 text-xl font-black text-[#0b1f33]">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 grid gap-8 rounded-[28px] border border-slate-200 bg-[#f7f9fb] p-8 lg:grid-cols-2 lg:p-10">
        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0b1f33]">What the website does</h2>
          <div className="mt-5 grid gap-3">
            {["Collects only the details needed for the selected process", "Runs separate people-search and removal simulations", "Makes the relevant ZIP package available", "Stops both searches on mobile devices"].map((item) => (
              <p key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#1261a0]" /> {item}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0b1f33]">What the website does not do</h2>
          <div className="mt-5 grid gap-3">
            {["It does not require a contribution before download", "It does not authorise unlawful or harmful searches", "It does not promise that every possible record exists", "It does not begin either search from a mobile phone or tablet"].map((item) => (
              <p key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#1261a0]" /> {item}</p>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
