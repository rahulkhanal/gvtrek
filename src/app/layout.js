import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Great Vision Trek and Expedition",
  description:
    "Explore Nepal with Great Vision Trek and Expedition, your trusted guide to the Himalayan paradise from vibrant Kathmandu. Unforgettable adventures in one of Earth's most diverse and awe-inspiring countries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
