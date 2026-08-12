"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Clock, Loader2, Lock, MapPin, Phone, User } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  address: string;
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", address: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-slate-800/80 border border-slate-700 rounded-lg pl-10 pr-3 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors";

  if (status === "success") {
    return (
      <div className="bg-slate-900/95 backdrop-blur rounded-2xl border border-slate-700/60 p-8 sm:p-10 text-center shadow-2xl">
        <CheckCircle2 className="w-14 h-14 text-orange-500 mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
        </h2>
        <p className="text-slate-300 text-lg">
          Your free quote request is in. A member of our team will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900/95 backdrop-blur rounded-2xl border border-slate-700/60 p-6 sm:p-8 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Get Your{" "}
          <span className="text-orange-500 underline decoration-orange-500/60 underline-offset-4">Free</span>{" "}
          Electrical Quote
        </h2>
        <span className="hidden sm:flex items-center gap-1.5 text-slate-400 text-sm flex-shrink-0">
          <Clock className="w-4 h-4" /> Takes 30 seconds
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label htmlFor="quote-name" className="block text-slate-400 text-xs font-medium mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              id="quote-name"
              type="text"
              required
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-slate-400 text-xs font-medium mb-1.5">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              id="quote-phone"
              type="tel"
              required
              placeholder="(941) 555-5555"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="quote-address" className="block text-slate-400 text-xs font-medium mb-1.5">
            Property Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              id="quote-address"
              type="text"
              required
              placeholder="Your Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold text-lg py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/30"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Get My Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm mt-3 text-center">
          Something went wrong. Please try again or call us at (941) 336-6811.
        </p>
      )}

      <p className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mt-4">
        <Lock className="w-3.5 h-3.5" /> No obligation. 100% free estimate.
      </p>
    </form>
  );
}
