export default function Home() {
  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#155aa0",
          color: "white",
          padding: "28px 32px",
        }}
      >
        <h1 style={{ margin: "0 0 8px 0" }}>
          Elevate Roof & Home
        </h1>
        <p style={{ margin: 0, fontSize: "18px" }}>
          Business Management
        </p>
      </div>

      {/* FORM SECTION */}
      <section
        style={{
          background: "white",
          margin: "30px auto",
          padding: "30px",
          maxWidth: "650px",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Request a Quote</h2>

        <form
          action="https://formspree.io/f/xjglvzde"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {/* SUBJECT */}
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request - Elevate Roof & Home Improvements"
          />

          {/* NAME */}
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              style={inputStyle}
            />
          </label>

          {/* PHONE */}
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="0400 000 000"
              required
              style={inputStyle}
            />
          </label>

          {/* EMAIL */}
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              required
              style={inputStyle}
            />
          </label>

          {/* SUBURB */}
          <label>
            Suburb
            <input
              type="text"
              name="suburb"
              placeholder="e.g. Pakenham"
              style={inputStyle}
            />
          </label>

          {/* SERVICE */}
          <label>
            Service Required
            <select name="service" style={inputStyle}>
              <option value="">Select service</option>
              <option>Roof Restoration</option>
              <option>Roof Repairs</option>
              <option>Re-bedding & Pointing</option>
              <option>Leak Detection</option>
              <option>Other</option>
            </select>
          </label>

          {/* JOB DESCRIPTION */}
          <label>
            Job Description
            <textarea
              name="message"
              placeholder="Describe your roofing needs..."
              rows="4"
              style={inputStyle}
            />
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            style={{
              background: "#155aa0",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Request Quote
          </button>
        </form>
      </section>
    </main>
  );
}