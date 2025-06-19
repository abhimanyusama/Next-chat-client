import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata = {
  title: "ChatConnect",
  description: "Real-time chat application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
