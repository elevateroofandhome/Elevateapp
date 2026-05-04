export default function Home() {
  return (
    <main className="bg-[#0f141a] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/roof-hero.jpg"
          alt="Premium roof restoration by Elevate Roof and Home Improvements"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0f141a]/70 to-[#0f141a]" />

        <div className="relative z-10 flex min-h-screen items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-400">
              PAKENHAM & SOUTH EAST MELBOURNE
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Premium Roof Restorations, Repairs & Painting
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Professional roofing backed by quality workmanship, real experience,
              and finishes built to last.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/30"
              >
                Request Quote
              </a>

              <a
                href="tel:0431170908"
                className="rounded-xl border border-white/80 px-7 py-4 text-base font-bold text-white"
              >
                Call Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-xl">8 Year</strong>
                Warranty
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-xl">500+</strong>
                Roofs Worked On
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-xl">Local</strong>
                Family Owned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-blue-400">
            SERVICES
          </p>

          <h2 className="mb-10 text-4xl font-black">
            Roofing & Home Improvement Services
          </h2>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              "Roof Restorations",
              "Roof Repairs",
              "Roof Painting",
              "Pressure Cleaning",
              "Gutter Installations",
              "Fascia & Cladding",
              "Roof Reports",
              "Home Improvements",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-[#151c24] p-6 shadow-xl"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-blue-500" />
                <h3 className="text-lg font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-7 text-black shadow-2xl">
          <h2 className="mb-2 text-3xl font-black">Request a Quote</h2>

          <p className="mb-6 text-gray-600">
            Tell us what you need and we’ll get back to you.
          </p>

          <form
            action="https://formspree.io/f/xjglvzde"
            method="POST"
            className="grid gap-4"
          >
            <input
              name="name"
              placeholder="Full Name"
              required
              className="rounded-xl border border-gray-300 p-4"
            />

            <input
              name="phone"
              placeholder="Phone"
              required
              className="rounded-xl border border-gray-300 p-4"
            />

            <input
              name="email"
              placeholder="Email"
              className="rounded-xl border border-gray-300 p-4"
            />

            <input
              name="suburb"
              placeholder="Suburb"
              className="rounded-xl border border-gray-300 p-4"
            />

            <select
              name="service"
              className="rounded-xl border border-gray-300 p-4"
              defaultValue=""
            >
              <option value="" disabled>
                Select Service
              </option>
              <option>Roof Restoration</option>
              <option>Roof Repairs</option>
              <option>Roof Painting</option>
              <option>Pressure Cleaning</option>
              <option>Gutter / Fascia</option>
              <option>Home Improvements</option>
            </select>

            <textarea
              name="message"
              placeholder="Briefly describe the job"
              rows="4"
              className="rounded-xl border border-gray-300 p-4"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 p-4 font-bold text-white"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}