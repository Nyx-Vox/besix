import type { Metadata } from "next";
import { AlertTriangle, Mail, ShieldAlert } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Report Abuse",
  description: "Report suspected misuse of MyBeSix.",
};

export default function ReportAbusePage() {
  const subject = encodeURIComponent("MyBeSix abuse report");
  const body = encodeURIComponent("Please describe the suspected misuse, relevant dates, request ID if known, and any supporting evidence. Do not include unnecessary sensitive personal information.");

  return (
    <PageShell
      eyebrow="Safety"
      title="Report suspected misuse of MyBeSix."
      description="Use this channel for stalking, harassment, threats, fraud, impersonation, doxxing, unauthorised searches, or other harmful activity connected to the service."
    >
      <div className="mx-auto max-w-3xl rounded-[28px] border border-red-200 bg-red-50 p-7 sm:p-9">
        <span className="grid size-12 place-items-center rounded-2xl bg-white text-red-700"><ShieldAlert className="size-6" /></span>
        <h2 className="mt-6 text-2xl font-black tracking-[-0.035em] text-red-950">What to include</h2>
        <ul className="mt-5 grid gap-3 text-sm leading-7 text-red-900/80">
          <li>The type of abuse or safety concern.</li>
          <li>The date and approximate time it occurred.</li>
          <li>A request ID, download link, username, or other reference when available.</li>
          <li>Screenshots or documents that support the report, with unrelated sensitive information removed.</li>
        </ul>
        <a href={`mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-black text-white hover:bg-red-800">
          <Mail className="size-4" /> Email an abuse report
        </a>
      </div>
      <div className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
        <AlertTriangle className="mt-1 size-5 shrink-0" />
        If someone is in immediate danger, contact the appropriate local emergency service or law-enforcement agency first.
      </div>
    </PageShell>
  );
}
