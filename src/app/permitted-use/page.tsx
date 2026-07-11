import type { Metadata } from "next";
import { Ban, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Permitted Use",
  description: "Understand permitted and prohibited uses of MyBeSix.",
};

export default function PermittedUsePage() {
  return (
    <PageShell
      eyebrow="Responsible use"
      title="Use MyBeSix only for a lawful, authorised purpose."
      description="The service is not designed to help anyone harass, threaten, stalk, discriminate against, deceive, or harm another person."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-slate-200 bg-white p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-[#eaf6f0] text-[#16794b]"><CheckCircle2 className="size-5" /></span>
            <h2 className="text-2xl font-black tracking-[-0.035em] text-[#0b1f33]">Examples of permitted use</h2>
          </div>
          <ul className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
            <li>Searching your own information to review what may be publicly available.</li>
            <li>Research performed with the subject’s informed permission.</li>
            <li>Legitimate fraud prevention, identity verification, or due-diligence work where legally authorised.</li>
            <li>Research by legal, compliance, investigative, or security professionals acting within applicable law.</li>
            <li>Locating public contact information for a legitimate, non-harmful reason.</li>
          </ul>
        </section>

        <section className="rounded-[28px] border border-red-200 bg-red-50 p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-white text-red-700"><Ban className="size-5" /></span>
            <h2 className="text-2xl font-black tracking-[-0.035em] text-red-950">Prohibited use</h2>
          </div>
          <ul className="mt-6 grid gap-4 text-sm leading-7 text-red-900/80">
            <li>Stalking, harassment, intimidation, threats, blackmail, or doxxing.</li>
            <li>Identity theft, account takeover, impersonation, fraud, or social engineering.</li>
            <li>Discrimination or eligibility decisions where the law requires a regulated screening process.</li>
            <li>Locating protected persons, minors, victims, witnesses, or anyone who has requested privacy for harmful purposes.</li>
            <li>Publishing sensitive personal information without a lawful basis.</li>
          </ul>
        </section>
      </div>

      <div className="mt-8 flex items-start gap-4 rounded-[24px] border border-sky-200 bg-[#f3f9fd] p-6 text-sm leading-7 text-slate-700">
        <ShieldCheck className="mt-1 size-6 shrink-0 text-[#1261a0]" />
        <p>MyBeSix may suspend access, remove files, preserve relevant records, or cooperate with lawful investigations when credible abuse is reported.</p>
      </div>
    </PageShell>
  );
}
