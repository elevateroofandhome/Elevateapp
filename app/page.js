export default function Home() {
  return (
    <main className="bg-[#0b0f14] text-white">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Elevate Roof and Home Improvements completed roof restoration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0f14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        {/* LOGO */}
        <div className="absolute top-0 left-0 z-20 p-5 md:p-8">
          <img
            src="/logo.png"
            alt="Elevate Roof and Home Improvements Logo"
            className="w-56 md:w-72 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-screen items-center px-6 py-32 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-blue-400">
              Pakenham & South East Melbourne
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Premium Roof Restoration, Repairs & Painting
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              Elevate Roof and Home Improvements delivers professional roofing,
              pressure cleaning, roof painting and home improvement services with
              quality workmanship and attention to detail.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="rounded-full bg-blue-500 px-7 py-4 text-center font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
              >
                Request a Quote
              </a>

              <a
                href="tel:0431170908"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Call 0431 170 908
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Our Services
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Roofing and home improvement work done properly.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Roof Restoration",
              "Pressure Cleaning",
              "Roof Repairs",
              "Roof Painting",
              "Home Improvements",
              "Roof Inspections",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="mt-3 text-gray-300">
                  Professional service, clear communication and high-quality
                  workmanship from start to finish.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-400/30 bg-blue-500/10 p-8 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Get Started
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Request a quote today.
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            Send through your details and we’ll get back to you as soon as possible.
          </p>

          <form
            action="https://formspree.io/f/xjglvzde"
            method="POST"
            className="mt-8 grid gap-4"
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
            />

            <input
              name="phone"
              required
              placeholder="Phone number"
              className="rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
            />

            <input
              name="suburb"
              placeholder="Suburb"
              className="rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what you need help with"
              className="rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-blue-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Send Quote Request
            </button>
          </form>
        </div>
      </section>
  {/* TRUST BAR */}
<section className="bg-black py-6 px-6 md:px-12 border-t border-white/10 border-b border-white/10">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    <div>
      <p className="text-2xl font-black text-blue-400">13+</p>
      <p className="text-sm text-gray-300">Years Experience</p>
    </div>

    <div>
      <p className="text-2xl font-black text-blue-400">500+</p>
      <p className="text-sm text-gray-300">Roofs Completed</p>
    </div>

    <div>
      <p className="text-2xl font-black text-blue-400">8 Year</p>
      <p className="text-sm text-gray-300">Workmanship Warranty</p>
    </div>

    <div>
      <p className="text-2xl font-black text-blue-400">100%</p>
      <p className="text-sm text-gray-300">Customer Focused</p>
    </div>

  </div>
</section>
  {/* BEFORE / AFTER */}
<section className="px-6 py-20 md:px-12">
  <div className="max-w-6xl mx-auto">

    <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
      Recent Work
    </p>

    <h2 className="text-4xl md:text-5xl font-black">
      Real results. No shortcuts.
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2">

      {/* JOB 1 */}
      <div className="grid grid-cols-2 gap-2">
  <img src="/before1.jpg" className="rounded-xl object-cover h-48 w-full" />
  <img src="/after1.jpg" className="rounded-xl object-cover h-48 w-full" />
</div>

      {/* JOB 2 */}
      <div className="grid grid-cols-2 gap-2">
  <img src="/before2.jpg" className="rounded-xl object-cover h-48 w-full" />
  <img src="/after2.jpg" className="rounded-xl object-cover h-48 w-full" />
</div>

    </div>

  </div>
</section>
{/* FIXED ACTION BAR */}
<div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
  <a
    href="tel:0431170908"
    className="w-1/2 bg-black text-white text-center py-4 font-bold border-t border-white/10"
  >
    Call Now
  </a>

  <a
    href="#quote"
    className="w-1/2 bg-blue-500 text-white text-center py-4 font-bold"
  >
    Get Quote
  </a>
</div>
    </main>
  );
}
