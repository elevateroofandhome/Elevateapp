import "./globals.css";

export const metadata = {
  title: "Elevate Roof & Home Improvements",
  description: "Roof restorations, repairs, painting and pressure cleaning across Pakenham and South East Melbourne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}