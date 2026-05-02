export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#111",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>Elevate Roof & Home Improvements</h1>

      <p>Premium roofing, restoration and home improvement services.</p>

      <a
        href="tel:0431170908"
        style={{
          color: "#00bcd4",
          fontSize: "22px",
          display: "block",
          marginBottom: "30px",
        }}
      >
        Call 0431 170 908
      </a>

      <h2>Request a Quote</h2>

      <form
        action="https://formspree.io/f/xjglvzde"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
        }}
      >
        {/* Subject */}
        <input
          type="hidden"
          name="_subject"
          value="New Quote Request - Elevate Roof & Home Improvements"
        />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          style={{ padding: "10px" }}
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          style={{ padding: "10px" }}
        />

        {/* Email (IMPORTANT for Formspree) */}
        <input
          type="email"
          name="_replyto"
          placeholder="Email Address"
          required
          style={{ padding: "10px" }}
        />

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Job Address"
          style={{ padding: "10px" }}
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Describe the job..."
          required
          style={{ padding: "10px", minHeight: "120px" }}
        />

        {/* Submit */}
        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#00bcd4",
            border: "none",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit Quote Request
        </button>
      </form>
    </main>
  );
}