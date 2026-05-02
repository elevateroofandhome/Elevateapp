export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "0",
      }}
    >
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

      <section
        style={{
          background: "white",
          margin: "30px auto",
          padding: "30px",
          maxWidth: "650px",
          borderRadius: "18px",
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
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request - Elevate Roof & Home Improvements"
          />

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

          <label>
            Email
            <input
              type="email"
              name="_replyto"
              placeholder="you@email.com"
              required
              style={inputStyle}
            />
          </label>

          <label>
            Suburb
            <input
              type="text"
              name="suburb"
              placeholder="e.g. Pakenham"
              style={inputStyle}
            />
          </label>

          <label>
            Service Required
            <select name="service" required style={inputStyle}>
              <option value="">Select service</option>
              <option value="Roof Restoration">Roof Restoration</option>
              <option value="Roof Repairs">Roof Repairs</option>
              <option value="Roof Cleaning">Roof Cleaning</option>
              <option value="Re-bedding / Re-pointing">
                Re-bedding / Re-pointing
              </option>
              <option value="Gutters / Fascia">Gutters / Fascia</option>
              <option value="Home Improvements">Home Improvements</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Roof Type
            <select name="roof_type" style={inputStyle}>
              <option value="">Select roof type</option>
              <option value="Concrete Tile">Concrete Tile</option>
              <option value="Terracotta Tile">Terracotta Tile</option>
              <option value="Metal Roof">Metal Roof</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </label>

          <label>
            Job Description
            <textarea
              name="details"
              placeholder="Describe the job..."
              required
              style={{
                ...inputStyle,
                minHeight: "120px",
                resize: "vertical",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "16px",
              background: "#155aa0",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit Quote Request
          </button>
        </form>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "8px",
  borderRadius: "10px",
  border: "1px solid #d5dce5",
  fontSize: "16px",
  boxSizing: "border-box",
};