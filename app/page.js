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

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-[#0b0f14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

        <div className="relative z-10 flex min-h-screen items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-blue-400">
              Pakenham & South East Melbourne
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Premium Roof Restoration, Repairs & Painting
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
              Honest roofing and home improvement work backed by real experience,
              quality workmanship and finishes built to last.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-base font-black text-white shadow-xl shadow-blue-950/40"
              >
                Get Free Quote
              </a>

              <a
                href="tel:0431170908"
                className="rounded-2xl border border-white/80 bg-black/20 px-8 py-4 text-base font-black text-white backdrop-blur"
              >
                Call Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-black">8 Year</p>
                <p className="text-xs uppercase tracking-widest text-gray-300">
                  Warranty
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-black">500+</p>
                <p className="text-xs uppercase tracking-widest text-gray-300">
                  Roofs
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-black">Local</p>
                <p className="text-xs uppercase tracking-widest text-gray-300">
                  Family Run
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-400">
            Our Services
          </p>

          <h2 className="mb-10 text-4xl font-black tracking-tight">
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
                className="rounded-3xl border border-white/10 bg-[#121922] p-6 shadow-2xl shadow-black/30"
              >
                <div className="mb-5 h-2 w-14 rounded-full bg-blue-500" />
                <h3 className="text-lg font-black">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-[#101720] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-400">
              Built Better. Built To Last.
            </p>

            <h2 className="text-4xl font-black tracking-tight">
              Professional work without the sales pressure.
            </h2>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            <p>
              We focus on proper preparation, clear communication and durable
              finishes that protect your home.
            </p>
            <p>
              Every quote is handled with care, clear scope and honest advice so
              you know exactly what you are paying for.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-7 text-black shadow-2xl md:p-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-600">
            Get Started
          </p>

          <h2 className="mb-3 text-4xl font-black tracking-tight">
            Request a Free Quote
          </h2>

          <p className="mb-7 text-gray-600">
            Send through your details and we’ll get back to you as soon as
            possible.
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
              className="rounded-2xl border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              name="phone"
              placeholder="Phone"
              required
              className="rounded-2xl border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              name="email"
              placeholder="Email"
              className="rounded-2xl border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <input
              name="suburb"
              placeholder="Suburb"
              className="rounded-2xl border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <select
              name="service"
              defaultValue=""
              className="rounded-2xl border border-gray-300 p-4 outline-none focus:border-blue-600"
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
              <option>Comprehensive Roof Report</option>
            </select>

            <textarea
              name="message"
              placeholder="Briefly describe the job"
              rows="4"
              className="rounded-2xl border border-gray-300 p-4 outline-none focus:border-blue-600"
            />

            <button
              type="submit"
              className="rounded-2xl bg-blue-600 p-4 font-black text-white"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
