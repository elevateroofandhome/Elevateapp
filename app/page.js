export default function Home() {
  return (
    <main className="bg-[#101418] text-white">
      <section className="min-h-screen flex items-center px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 font-bold uppercase mb-3">
            Pakenham & South East Melbourne
          </p>

          <h1 className="text-5xl font-black mb-6">
            Premium Roof Restorations, Repairs & Painting
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Professional roofing backed by quality workmanship and real experience.
            Built to last.
          </p>

          <div className="flex gap-4">
            <a href="#quote" className="bg-blue-600 px-6 py-3 rounded-lg font-bold">
              Request Quote
            </a>

            <a href="tel:0431170908" className="border border-white px-6 py-3 rounded-lg font-bold">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-black mb-10">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Roof Restorations",
            "Roof Repairs",
            "Roof Painting",
            "Pressure Cleaning",
          ].map((service) => (
            <div key={service} className="bg-[#151b22] p-6 rounded-xl border border-[#253241]">
              <div className="w-10 h-10 bg-blue-600 mb-4 rounded"></div>
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

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
            <input name="name" placeholder="Full Name" required className="border p-3 rounded" />
            <input name="phone" placeholder="Phone" required className="border p-3 rounded" />
            <input name="email" placeholder="Email" className="border p-3 rounded" />
            <input name="suburb" placeholder="Suburb" className="border p-3 rounded" />

            <select name="service" className="border p-3 rounded">
              <option>Select Service</option>
              <option>Roof Restoration</option>
              <option>Roof Repairs</option>
              <option>Roof Painting</option>
              <option>Pressure Cleaning</option>
            </select>

            <button className="bg-blue-600 text-white p-3 rounded font-bold">
              Send Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}