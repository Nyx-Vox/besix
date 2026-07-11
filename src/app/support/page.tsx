import type { Metadata } from "next";
import { SupportCard } from "@/components/support-card";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Support MyBeSix",
  description: "Support the free MyBeSix project with an optional USDT contribution.",
};

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support the project"
      title="Help maintain free access to MyBeSix."
      description="USDT support is completely voluntary. It does not unlock features, change results, or give a request priority over anyone else."
    >
      <div className="mx-auto max-w-3xl">
        <SupportCard />
        <div className="mt-6 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-sm leading-7 text-slate-600">
          Contributions are not represented as charitable or tax-deductible. Always confirm the asset, network, and wallet address before sending a blockchain transfer.
        </div>
      </div>
    </PageShell>
  );
}
