"use client";

import { useState } from "react";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const services = [
    "Roof Restorations",
    "Roof Repairs",
    "Roof Painting",
    "Re-Bedding & Re-Pointing",
    "Emergency Leak Repairs",
    "Gutter & Fascia Cleaning",
    "Valley Replacements",
    "Pressure Washing",
    "Comprehensive Roof Reports",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pb-20 text-white md:pb-0">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 py-10 md:px-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-neutral-950/75 to-neutral-950" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center text-center">
          <img
            src="/logo.png"
            alt="Elevate Roof and Home Improvements"
            className="mx-auto mb-8 w-[26rem] max-w-full md:w-[42rem]"
          />

          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-blue-400">
            Local • Reliable • Professional
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight md:text-7xl">
            Premium Roof Restorations, Repairs & Home Improvements Across Victoria
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Family owned and operated with 13+ years experience. Professional roof inspections,
            roof repairs, restorations, repainting, re-bedding, re-pointing and emergency leak support.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <button
              onClick={() => setQuoteOpen(true)}
              className="rounded-full bg-blue-500 px-8 py-4 text-lg font-black text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600"
            >
              Get Free Quote
            </button>

            <a
              href="tel:0431170908"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-lg font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              Call 0431 170 908
            </a>
          </div>

          <div className="mt-10 grid w-full gap-4 md:grid-cols-4">
            {["13+ Years Experience", "500+ Roofs Worked On", "8 Year Warranty", "Local Family Business"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-black text-white backdrop-blur"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Roofing Services Built Around Trust
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/40"
              >
                <h3 className="text-xl font-black">{service}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  Professional assessment, clear advice and quality workmanship from start to finish.
                </p>
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="mt-5 text-sm font-black text-blue-400 hover:text-blue-300"
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
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-red-500/30 bg-red-950/25 p-8 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-red-400">
            Urgent Help
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Roof Leaking Right Now?
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-300">
            Emergency leaks can quickly cause internal damage. Call now or send through your details
            and photos so we can assess the issue quickly.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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
          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
            Why Choose Elevate
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            A Premium Experience From Quote To Completion
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Detailed Roof Reports",
                text: "Clear inspection notes, urgent issues, minor defects, likely causes and recommended solutions.",
              },
              {
                title: "Clean Professional Finish",
                text: "Quality preparation, premium presentation and a strong focus on long-lasting workmanship.",
              },
              {
                title: "Straight Communication",
                text: "Clear quotes, honest advice and reliable contact throughout the job.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Recent Roof Transformations
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Before & After", "Roof Restoration", "Roof Repairs"].map((item) => (
              <div
                key={item}
                className="flex h-64 items-end rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-950 p-6"
              >
                <p className="font-black text-neutral-300">{item} Photo</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            Replace these placeholders with real job photos when ready.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-500/20 bg-blue-950/20 p-8 text-center md:p-12">
          <h2 className="text-4xl font-black md:text-6xl">
            Want Your Roof Assessed Properly?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
            Send your details and photos through. We’ll review the job and contact you with the next step.
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
        <p className="font-black text-white">Elevate Roof & Home Improvements</p>
        <p className="mt-2">Pakenham, Victoria • 0431 170 908</p>
        <p className="mt-2">ABN: 55 343 607 931</p>
        <a
          href="mailto:elevateroofandhome@gmail.com"
          className="mt-3 inline-block text-blue-400 hover:text-blue-300"
        >
          elevateroofandhome@gmail.com
        </a>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Request a Quote</h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Fill this out and we’ll get back to you as soon as possible.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setQuoteOpen(false)}
                className="rounded-full bg-white/10 px-4 py-2 font-black hover:bg-white/20"
              >
                X
              </button>
            </div>

            <form
              action="https://formspree.io/f/xjglvzde"
              method="POST"
              encType="multipart/form-data"
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

              <label className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-4 text-sm text-neutral-400">
                Upload photos if needed
                <input name="attachment" type="file" className="mt-3 block w-full text-sm" />
              </label>

              <input
                type="hidden"
                name="_subject"
                value="New Website Quote Request - Elevate"
              />

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