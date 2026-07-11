import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileSearch,
  FileX2,
  HeartHandshake,
  Home as HomeIcon,
  Laptop,
  MailSearch,
  MapPinned,
  Search,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  UserRoundSearch,
} from "lucide-react";
import { SearchForm } from "@/components/search-form";
import { SupportCard } from "@/components/support-card";

export const metadata: Metadata = {
  title: "Professional Background Checks & People Search | MyBeSix",
  description: "Conduct secure, comprehensive background checks and people searches. 100% free, no registration or credit card required. Windows desktop required.",
  keywords: [
    "people search",
    "background check",
    "public records search",
    "free background check",
    "no credit card people search",
    "find address history",
    "digital footprint scan",
    "remove personal information",
    "data broker opt out",
    "secure background screening"
  ].join(", "),
  openGraph: {
    title: "Professional Background Checks & People Search | MyBeSix",
    description: "Conduct secure, comprehensive background checks and people searches. 100% free, no registration required.",
    type: "website",
  },
};

const coverage = [
  { icon: UserRoundSearch, title: "Identity Verification", text: "Cross-reference names, aliases, and known identifiers against national databases." },
  { icon: MailSearch, title: "Contact Extraction", text: "Uncover historical phone numbers, primary email addresses, and telecom records." },
  { icon: MapPinned, title: "Address History", text: "Map out current and previous residential footprints spanning up to 20 years." },
  { icon: Building2, title: "Public & Court Records", text: "Scan civil filings, bankruptcies, liens, and available public legal documents." },
  { icon: HomeIcon, title: "Asset & Property Data", text: "Identify historical property deeds and vehicle registration indicators." },
  { icon: Smartphone, title: "Digital Footprint", text: "Sweep social media profiles, public forums, and known data breach exposures." },
];

const faqs = [
  ["Is this service truly free?", "Yes. Our platform generates and provides the encrypted PDF search packages without requiring a subscription, registration, or credit card. If it works for you, optional donations help keep the servers running and free for everyone."],
  ["How do I receive my report?", "After the online system completes its initial 40–90 second compilation sweep, you will securely download a ZIP archive containing your comprehensive PDF dossier."],
  ["Why can't I search on my phone?", "Due to the secure nature of the 256-bit encrypted ZIP packages, both our People Search and Information Removal systems require a Windows desktop or laptop environment to process and download safely."],
  ["What starting information is required?", "At minimum, you need a full name and a phone number. Adding an email address or a current/past residential address significantly improves the accuracy of the sweep."],
  ["Are there restrictions on who I can search?", "Absolutely. You must have a lawful, authorized purpose to conduct a search. Using this tool for harassment, stalking, discrimination, or malicious intent is strictly prohibited and monitored."],
];

export default function Home() {
  return (
    <main className="bg-[#f8fafc]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-[#f0f9ff] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0369a1] shadow-sm">
              <ShieldCheck className="size-4" /> Comprehensive Public Record Access
            </div>
            
            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0f172a] sm:text-6xl lg:text-[4.25rem]">
              Professional grade <br className="hidden lg:block" />
              <span className="text-[#0369a1]">background checks.</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Input known identifiers to initiate a deep-web and public records sweep. Generate a highly detailed, secure PDF dossier covering contact history, public records, and digital footprints.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#start-search" 
                className="hidden sm:inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-4 text-sm font-black text-white shadow-sm transition-colors duration-200 hover:bg-[#0369a1]"
                aria-label="Scroll to Start Search Form"
              >
                <Search className="size-5" /> Initiate Search
              </a>
              <Link 
                href="/data-removal" 
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-[#0f172a] shadow-sm transition-colors duration-200 hover:border-slate-300 hover:bg-slate-100"
                aria-label="Navigate to Data Removal Page"
              >
                <ShieldAlert className="size-5 text-[#16a34a]" /> Opt-Out & Remove Data
              </Link>
            </div>

            <div className="mt-10 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-2">
              {[
                "100% Free", 
                "No Registration Required", 
                "No Credit Card Required", 
                "Easy To Use",
                "Windows Desktop Only",
                "256-bit Encrypted"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  <CheckCircle2 className="size-4 text-[#0369a1]" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div id="start-search" className="scroll-mt-28 relative z-10">
            {/* DESKTOP VIEW: Shows the actual form */}
            <div className="hidden sm:block">
              <SearchForm />
            </div>
            
            {/* MOBILE VIEW: Hides form, shows warning with solid colors */}
            <div className="block overflow-hidden rounded-[24px] border border-amber-200 bg-[#fffbeb] p-8 text-center shadow-md sm:hidden">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-amber-100 text-amber-700 shadow-sm">
                <Laptop className="size-8" />
              </span>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-amber-950">Desktop Access Required</h3>
              <p className="mt-4 text-sm leading-relaxed text-amber-900">
                Due to the secure compilation process and encrypted ZIP file delivery of our background reports, this search module cannot be processed on mobile devices. 
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-200 px-4 py-3 text-xs font-bold uppercase tracking-wider text-amber-950">
                Switch to a Windows PC or Laptop
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#0369a1]">Streamlined Intelligence</h2>
            <p className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#0f172a] sm:text-4xl">From fragmented data to a cohesive dossier in minutes.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { number: "01", title: "Parameter Input", text: "Submit the subject's known identifiers, such as name, historical phone numbers, and past addresses." },
              { number: "02", title: "Automated Sweep", text: "Our systems query dozens of public directories and background check databases in a secure 40–90 second sequence." },
              { number: "03", title: "Secure Delivery", text: "Download an encrypted ZIP archive containing the finalized, highly detailed PDF report to your Windows machine." },
            ].map((step) => (
              <article key={step.number} className="group rounded-[24px] border border-slate-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
                <span className="text-5xl font-black tracking-tighter text-slate-200">{step.number}</span>
                <h3 className="mt-4 text-xl font-black tracking-[-0.02em] text-[#0f172a]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#0369a1]">Search Capabilities</h2>
              <p className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#0f172a] sm:text-4xl">Deep data extraction across multiple vectors.</p>
            </div>
            <Link 
              href="/permitted-use" 
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#0369a1] transition-colors hover:text-[#0f172a]"
            >
              Review FCRA Compliance & Permitted Uses <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-8 transition-colors duration-200 hover:bg-[#f1f5f9]">
                <span className="grid size-12 place-items-center rounded-xl bg-white text-[#0369a1] shadow-sm"><item.icon className="size-6" strokeWidth={2.5} /></span>
                <h3 className="mt-6 text-lg font-black text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY & REMOVAL SECTION */}
      <section className="border-y border-slate-200 bg-[#0f172a] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0ea5e9] bg-[#0c4a6e] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#38bdf8]">
              <ShieldAlert className="size-4" /> Privacy Protection
            </div>
            <h2 className="mt-6 max-w-2xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Take control of your personal digital footprint.</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
              Not looking for someone else? If your own data is exposed online, use our dedicated privacy tool. Submit your details to generate a comprehensive found-and-removed status report.
            </p>
            <Link 
              href="/data-removal" 
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#0f172a] transition-colors duration-200 hover:bg-[#e2e8f0]"
            >
              Start Information Removal <ArrowRight className="size-4" />
            </Link>
          </div>
          
          <div className="rounded-[32px] border border-slate-700 bg-[#1e293b] p-8 sm:p-10">
            <h3 className="mb-6 text-xl font-black tracking-tight text-white">The Removal Process</h3>
            <div className="grid gap-4">
              {[
                "Locate exposed directory listings",
                "Prepare legal opt-out requests",
                "Generate actioned removal PDF dossier"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-600 bg-[#334155] p-4 text-sm font-bold text-slate-100">
                  <CheckCircle2 className="size-5 shrink-0 text-[#22c55e]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="grid size-14 place-items-center rounded-2xl bg-[#dcfce7] text-[#15803d]"><HeartHandshake className="size-7" /></span>
            <h2 className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#15803d]">Community Supported</h2>
            <p className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0f172a] sm:text-4xl">Free infrastructure, sustained by you.</p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              Our background check architecture is highly resource-intensive, but we are committed to keeping it 100% free. No registration and no credit card are ever required. If this service works well for you, please consider donating to help us maintain the servers and keep it free for everyone.
            </p>
          </div>
          <SupportCard />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#0369a1]">Knowledge Base</h2>
            <p className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0f172a] sm:text-4xl">Frequently Asked Questions</p>
          </div>
          <div className="divide-y divide-slate-200 rounded-[24px] border border-slate-200 bg-[#f8fafc] px-6 sm:px-10">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6 cursor-pointer">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black tracking-tight text-[#0f172a] outline-none transition-colors hover:text-[#0369a1]">
                  {question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#0369a1] shadow-sm transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}