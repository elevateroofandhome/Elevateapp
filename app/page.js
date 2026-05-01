export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", background: "#111", color: "white", minHeight: "100vh" }}>
      
      <h1>Elevate Roof & Home Improvements</h1>
      <p>Premium roofing, restoration and home improvement services.</p>

      <a href="tel:0431170908" style={{ color: "#00bcd4", fontSize: "22px", display: "block", marginBottom: "30px" }}>
        Call 0431 170 908
      </a>

      <h2>Request a Quote</h2>

      <form action="https://formspree.io/f/YOURFORMID" method="POST" style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        
        <input name="name" placeholder="Full Name" required style={{ padding: "10px" }} />
        
        <input name="phone" placeholder="Phone Number" required style={{ padding: "10px" }} />
        
        <input name="address" placeholder="Job Address" style={{ padding: "10px" }} />
        
        <textarea name="details" placeholder="Describe the job..." style={{ padding: "10px" }} />
        
        <button type="submit" style={{ padding: "12px", background: "#00bcd4", border: "none", color: "black", fontWeight: "bold" }}>
          Submit Quote Request
        </button>

      </form>

    </main>
  );
}