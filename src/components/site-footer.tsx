import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/permitted-use", label: "Permitted use" },
  { href: "/support", label: "Support MyBeSix" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/report-abuse", label: "Report abuse" },
  { href: "/data-removal", label: "Data removal" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f9fb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
            MyBeSix provides free desktop-only experiences for people-search preparation and personal-information removal report packages.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck className="size-4 text-[#1261a0]" />
            Use responsibly and only where lawful.
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#0b1f33]">Explore</h2>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-[#1261a0]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#0b1f33]">Need help?</h2>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1261a0] hover:text-[#0d4f86]"
          >
            <Mail className="size-4" />
            {siteConfig.supportEmail}
          </a>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Never send passwords, payment recovery phrases, or full identity documents through ordinary email.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MyBeSix. All rights reserved.</p>
          <p>Free access does not remove the user’s responsibility to follow applicable laws.</p>
        </div>
      </div>
    </footer>
  );
}
