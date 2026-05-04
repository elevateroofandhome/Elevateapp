export default function Home() {
  return (
    <main className="bg-[#101418] text-white">

      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/roof-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-5 py-20">
          <p className="text-blue-400 font-bold uppercase mb-3">
            Pakenham & South East Melbourne
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Premium Roof Restorations, Repairs & Painting
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Professional roofing backed by quality workmanship and real
            experience. Built to last.
          </p>

          <div className="flex gap-4">
            <a
              href="#quote"
              className="bg-blue-600 px-6 py-3 rounded-lg font-bold"
            >
              Request Quote
            </a>

            <a
              href="tel:0431170908"
              className="border border-white px-6 py-3 rounded-lg font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-black mb-10">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Roof Restorations",
            "Roof Repairs",
            "Roof Painting",
            "Pressure Cleaning",
          ].map((service) => (
            <div
              key={service}
              className="bg-[#151b22] p-6 rounded-xl border border-[#253241]"
            >
              <div className="w-10 h-10 bg-blue-600 mb-4 rounded"></div>
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="py-20 bg-[#151b22]">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-black mb-10">Recent Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img src="/roof-1.jpg" className="rounded-xl" />
            <img src="/roof-2.jpg" className="rounded-xl" />
            <img src="/roof-3.jpg" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="py-20 max-w-3xl mx-auto px-5">
        <div className="bg-white text-black p-8 rounded-2xl">
          <h2 className="text-3xl font-black mb-6">
            Get a Free Roof Inspection
          </h2>

          <form
            action="https://formspree.io/f/xjglvzde"
            method="POST"
            className="grid gap-4"
          >
            <input
              name="name"
              placeholder="Full Name"
              required
              className="border p-3 rounded"
            />

            <input
              name="phone"
              placeholder="Phone"
              required
              className="border p-3 rounded"
            />

            <input
              name="email"
              placeholder="Email"
              className="border p-3
