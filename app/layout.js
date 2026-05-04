import './globals.css';

export const metadata = {
  title: "Elevate Roof & Home Improvements",
  description: "Roofing and home improvement services in Victoria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#101418] text-white">
        {children}
      </body>
    </html>
  );
}