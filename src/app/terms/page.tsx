import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the MyBeSix people-search and information-removal downloads.",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms for using MyBeSix searches and download packages."
      description="These starter terms should be reviewed by the company’s lawyer before public launch and updated to reflect the final software, data sources, and operating jurisdictions."
    >
      <div className="prose-shell">
        <section>
          <h2>Acceptance</h2>
          <p>By using either search or downloading either package, you agree to use MyBeSix only for lawful, authorised purposes and to follow these terms and the permitted-use rules.</p>
        </section>
        <section>
          <h2>No harmful use</h2>
          <p>You may not use MyBeSix for stalking, harassment, threats, fraud, identity theft, discrimination, blackmail, doxxing, unauthorised surveillance, or any activity that violates another person’s rights.</p>
        </section>
        <section>
          <h2>Accuracy and availability</h2>
          <p>Information from public, commercial, or third-party sources may be incomplete, delayed, duplicated, or incorrect. Users must independently verify important findings before relying on them.</p>
        </section>
        <section>
          <h2>Desktop software</h2>
          <p>The ZIP packages may contain executable software, reports, and instructions. Both search processes are intended for desktop or laptop use. Users are responsible for confirming system compatibility, downloading only from the official domain, and reviewing included instructions.</p>
        </section>
        <section>
          <h2>Optional support</h2>
          <p>USDT support is voluntary, generally irreversible after blockchain confirmation, and does not purchase priority, guaranteed results, or additional rights unless a separate written agreement says otherwise.</p>
        </section>
        <section>
          <h2>Suspension and enforcement</h2>
          <p>MyBeSix may restrict access, change or remove downloads, investigate abuse, or cooperate with lawful authorities when necessary to protect users, the company, or the public.</p>
        </section>
      </div>
    </PageShell>
  );
}
