"use client";

import { ArrowRight, FileX2, Laptop, LockKeyhole, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { DesktopOnlyModal } from "@/components/desktop-only-modal";
import { isMobileDevice } from "@/lib/device";

export type RemovalRequest = {
  fullName: string;
  email: string;
  phone: string;
  accepted: boolean;
};

const initialForm: RemovalRequest = {
  fullName: "",
  email: "",
  phone: "",
  accepted: false,
};

export function RemovalForm() {
  const router = useRouter();
  const [form, setForm] = useState<RemovalRequest>(initialForm);
  const [error, setError] = useState("");
  const [desktopWarning, setDesktopWarning] = useState(false);

  function updateField<K extends keyof RemovalRequest>(key: K, value: RemovalRequest[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Enter your full name, email address, and phone number to continue.");
      return;
    }

    if (!form.accepted) {
      setError("Confirm that the information belongs to you or someone you are authorised to represent.");
      return;
    }

    if (isMobileDevice()) {
      setDesktopWarning(true);
      return;
    }

    const durationSeconds = Math.floor(Math.random() * 51) + 40;
    const requestId = `MBR-${Date.now().toString(36).toUpperCase()}`;
    const startedAt = Date.now();

    sessionStorage.setItem(
      "mybesix-removal-request",
      JSON.stringify({
        ...form,
        requestId,
        startedAt,
        durationSeconds,
        readyAt: startedAt + durationSeconds * 1000,
      }),
    );

    router.push("/data-removal/process");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.10)] sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1261a0]">Free removal search</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#0b1f33]">Find and remove your information</h2>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#eef6fb] text-[#1261a0]">
            <FileX2 className="size-5" />
          </span>
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-[#fffaf0] px-3.5 py-3 text-xs font-semibold leading-5 text-amber-900">
          <Laptop className="mt-0.5 size-4 shrink-0" />
          Information-removal processing is available only on a desktop or laptop computer and does not work on mobile devices.
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="mb-2 block text-sm font-bold text-slate-700">Full name *</span>
            <input
              required
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              placeholder="Enter your full legal name"
              autoComplete="name"
              className="field"
            />
          </label>

          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700">Email address *</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="name@example.com"
              autoComplete="email"
              className="field"
            />
          </label>

          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700">Phone number *</span>
            <input
              required
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="Include country code"
              autoComplete="tel"
              inputMode="tel"
              className="field"
            />
          </label>
        </div>

        <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
          <input
            type="checkbox"
            checked={form.accepted}
            onChange={(event) => updateField("accepted", event.target.checked)}
            className="mt-0.5 size-4 accent-[#1261a0]"
          />
          <span className="text-xs leading-5 text-slate-600">
            I confirm that this information belongs to me or to someone I am legally authorised to represent, and I authorise MyBeSix to prepare the removal search and report package.
          </span>
        </label>

        {error && (
          <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1261a0] px-5 py-4 text-sm font-black text-white shadow-[0_12px_30px_rgba(18,97,160,0.2)] transition hover:bg-[#0d4f86] focus:outline-none focus:ring-4 focus:ring-sky-100"
        >
          Search and remove my information
          <ArrowRight className="size-4" />
        </button>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5"><LockKeyhole className="size-3.5" /> No payment required</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5" /> Ownership confirmation required</span>
        </div>
      </form>

      <DesktopOnlyModal
        open={desktopWarning}
        onClose={() => setDesktopWarning(false)}
        action="Information-removal search"
      />
    </>
  );
}
