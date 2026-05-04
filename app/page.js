export default function Home() {
  const services = [
    "Roof Restoration",
    "Pressure Cleaning",
    "Roof Repairs",
    "Roof Painting",
    "Home Improvements",
    "Roof Inspections",
  ];

  return (
    <main className="bg-[#0b0f14] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pb-24">
        <img
          src="/hero.jpg"
          alt="Elevate Roof and Home Improvements completed roof restoration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#0b0f14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        {/* CENTERED LOGO HEADER */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center bg-black/20 px-6 py-6 backdrop-blur-sm">
          <img
            src="/logo.png"
            alt="Elevate Roof and Home Improvements Logo"
            className="w-96 drop-shadow-[0_0_14px_rgba(0,0,0,0.75)] md:w-[32rem]"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-44 text-center md:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-blue-400 md:text-base">
              Pakenham & South East Melbourne
            </p>

            <h1 className="text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
              Premium Roof Restoration, Repairs & Painting
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              Elevate Roof and Home Improvements delivers professional roofing,
              pressure cleaning, roof painting and home improvement services
              with quality workmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Our Services
          </p>

          <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
            Roofing and home improvement work done properly.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Professional service, clean presentation and reliable
                  workmanship from start to finish.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Request a Quote
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Need your roof inspected or repaired?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Get in touch with Elevate Roof and Home Improvements for roof
            restorations, repairs, pressure cleaning, roof painting and general
            home improvement work across Pakenham and South East Melbourne.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="tel:0431170908"
              className="rounded-full bg-blue-500 px-7 py-4 text-center font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600"
            >
              Call 0431 170 908
            </a>

            <a
              href="mailto:elevateroofandhome@gmail.com"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 md:hidden">
        <a
          href="tel:0431170908"
          className="bg-black px-5 py-5 text-center text-lg font-black text-white"
        >
          Call Now
        </a>

        <a
          href="#quote"
          className="bg-blue-500 px-5 py-5 text-center text-lg font-black text-white"
        >
          Get Quote
        </a>
      </div>
    </main>
  );
}
