import type { Metadata } from "next";
import { Mail, MessageSquareText, ShieldAlert } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the MyBeSix support team.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Get help with the website or download package."
      description="For privacy complaints, suspected abuse, or data-removal requests, use the dedicated channels so the issue reaches the right team."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { icon: Mail, title: "General support", text: siteConfig.supportEmail, href: `mailto:${siteConfig.supportEmail}` },
          { icon: ShieldAlert, title: "Report abuse", text: "Report a harmful or prohibited use", href: "/report-abuse" },
          { icon: MessageSquareText, title: "Data request", text: "Request correction or removal", href: "/data-removal" },
        ].map((item) => (
          <a key={item.title} href={item.href} className="rounded-[26px] border border-slate-200 p-7 transition hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(15,23,42,0.07)]">
            <span className="grid size-11 place-items-center rounded-xl bg-[#eef6fb] text-[#1261a0]"><item.icon className="size-5" /></span>
            <h2 className="mt-5 text-xl font-black text-[#0b1f33]">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </a>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-sm leading-7 text-slate-600">
        Do not email passwords, recovery phrases, complete Social Security numbers, payment-card details, or unredacted identity documents unless the support team gives you an approved secure upload method.
      </div>
    </PageShell>
  );
}
