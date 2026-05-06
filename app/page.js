"use client";

import { useState } from "react";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-10 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-neutral-950 to-neutral-950" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-6 h-24 w-24 rounded-full border border-blue-400/40 bg-white/10 shadow-2xl shadow-blue-500/20" />

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
            Elevate Roof & Home Improvements
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Premium Roof Restorations, Repairs & Home Improvements Across Victoria
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Family owned. 13+ years experience. Reliable workmanship. Professional roof inspections, repairs, restorations, repainting, re-bedding, re-pointing and emergency leak support.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => setQuoteOpen(true)}
              className="rounded-full bg-blue-500 px-8 py-4 text-lg font-black text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600"
            >
              Get Free Quote
            </button>

            <a
              href="tel:0431170908"
              className="rounded-full border border-white/20 px-8 py-4 text-lg font-black text-white transition hover:bg-white/10"
            >
              Call 0431 170 908
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "13+ Years Experience",
              "500+ Roofs Worked On",
              "8 Year Warranty",
              "Local Family Business",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-bold text-neutral-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-5xl">Roofing Services</h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Built to help customers quickly understand what you do and enquire with confidence.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Roof Restorations",
              "Roof Repairs",
              "Roof Painting",
              "Re-Bedding & Re-Pointing",
              "Emergency Leak Repairs",
              "Gutter & Fascia Cleaning",
              "Valley Replacements",
              "Pressure Washing",
              "Comprehensive Roof Reports",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6 shadow-xl"
              >
                <h3 className="text-xl font-black text-white">{service}</h3>
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="mt-5 text-sm font-bold text-blue-400 hover:text-blue-300"
                >
                  Request Quote →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-12">
          <h2 className="text-3xl font-black md:text-5xl">
            Roof Leaking Right Now?
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Emergency roof leaks can quickly cause ceiling, insulation and internal damage. Call now for urgent support.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:0431170908"
              className="rounded-full bg-red-600 px-8 py-4 text-center text-lg font-black text-white hover:bg-red-700"
            >
              Emergency Call
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="rounded-full border border-white/20 px-8 py-4 text-lg font-black text-white hover:bg-white/10"
            >
              Send Leak Details
            </button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Why Customers Choose Elevate
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Detailed Roof Reports",
                text: "Clear inspection notes, urgent issues, minor defects, causes and recommended solutions.",
              },
              {
                title: "Premium Finish",
                text: "Professional preparation, quality products and clean presentation from quote to completion.",
              },
              {
                title: "Clear Communication",
                text: "Simple quotes, honest advice and a reliable point of contact from start to finish.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-3 text-neutral-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Recent Roof Transformations
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex h-64 items-end rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-950 p-6"
              >
                <p className="font-bold text-neutral-300">
                  Add real before/after job photo here
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black md:text-6xl">
            Want Your Roof Assessed Properly?
          </h2>
          <p className="mt-5 text-neutral-300">
            Send through your details and photos. We’ll review the job and contact you with the next step.
          </p>

          <button
            onClick={() => setQuoteOpen(true)}
            className="mt-8 rounded-full bg-blue-500 px-10 py-5 text-xl font-black text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600"
          >
            Start Quote Request
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-neutral-400">
        <p className="font-bold text-white">Elevate Roof & Home Improvements</p>
        <p className="mt-2">Pakenham, Victoria • 0431 170 908</p>
        <p className="mt-2">ABN: 55 343 607 931</p>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-white/10 md:hidden">
        <a
          href="tel:0431170908"
          className="bg-black px-3 py-4 text-center text-sm font-black text-white"
        >
          Call
        </a>

        <button
          onClick={() => setQuoteOpen(true)}
          className="bg-blue-500 px-3 py-4 text-sm font-black text-white"
        >
          Quote
        </button>

        <a
          href="tel:0431170908"
          className="bg-red-600 px-3 py-4 text-center text-sm font-black text-white"
        >
          Emergency
        </a>
      </div>

      {/* QUOTE FORM POPUP */}
      {quoteOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Request a Quote</h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Fill this out and we’ll get back to you as soon as possible.
                </p>
              </div>

              <button
                onClick={() => setQuoteOpen(false)}
                className="rounded-full bg-white/10 px-4 py-2 font-black hover:bg-white/20"
              >
                X
              </button>
            </div>

            <form
              action="https://formspree.io/f/xjglvzde"
              method="POST"
              className="grid gap-4"
            >
              <input
                name="name"
                required
                placeholder="Full Name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-blue-400"
              />

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-blue-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-blue-400"
              />

              <input
                name="address"
                placeholder="Address / Suburb"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-blue-400"
              />

              <select
                name="service"
                required
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-blue-400"
              >
                <option value="">Select Service Needed</option>
                <option>Roof Restoration</option>
                <option>Roof Repair</option>
                <option>Emergency Leak</option>
                <option>Roof Painting</option>
                <option>Re-Bedding / Re-Pointing</option>
                <option>Gutter / Fascia Cleaning</option>
                <option>Comprehensive Roof Report</option>
                <option>Other Home Improvement</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what you need done..."
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-blue-400"
              />

              <input type="hidden" name="_subject" value="New Website Quote Request - Elevate" />

              <button
                type="submit"
                className="rounded-2xl bg-blue-500 px-6 py-4 text-lg font-black text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600"
              >
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}