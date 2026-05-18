"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BUSINESS_TYPES = [
  "Restaurant",
  "Retail",
  "Education",
  "Healthcare",
  "Real Estate",
  "E-commerce",
  "Other",
];

export default function BookingForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Wire up form submission (e.g., to email service or CRM) here.
    // For now we just navigate to the thank-you page.
    setTimeout(() => {
      router.push("/thanks");
    }, 400);
  }

  return (
    <section
      id="form"
      className="relative z-10 w-full bg-background py-24 px-6 scroll-mt-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Book Your FREE Consultation Call
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 italic text-silver"
        >
          Limited spots available — only 3 seats remaining this month!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-[600px] rounded-2xl border border-border-soft bg-card p-6 sm:p-8 text-left"
          style={{ boxShadow: "0 0 32px rgba(192,192,192,0.08)" }}
        >
          <div className="flex flex-col gap-5">
            <Field
              id="fullName"
              label="Full Name"
              type="text"
              required
              autoComplete="name"
            />
            <Field
              id="phone"
              label="Phone Number"
              type="tel"
              required
              autoComplete="tel"
            />
            <Field
              id="businessName"
              label="Business Name"
              type="text"
              required
              autoComplete="organization"
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="businessType"
                className="text-sm font-medium text-silver"
              >
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                defaultValue=""
                className="w-full rounded-lg border border-silver/40 bg-background px-4 py-3 text-white outline-none transition focus:border-silver focus:ring-2 focus:ring-silver/30"
              >
                <option value="" disabled>
                  Select your business type
                </option>
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full silver-gradient-bg silver-glow rounded-full px-8 py-4 text-base sm:text-lg font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            >
              {submitting ? "Booking..." : "Book My FREE Call Now"}
            </button>

            <p className="text-center text-xs text-zinc-400">
              No credit card required. 100% FREE.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-silver">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-silver/40 bg-background px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-silver focus:ring-2 focus:ring-silver/30"
      />
    </div>
  );
}
