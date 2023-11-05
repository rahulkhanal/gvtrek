import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NavProvider } from "./context/NavContext";
import { SubNav } from "./components/SubNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Great Vision Trek and Expedition",
  description:
    "Explore Nepal with Great Vision Trek and Expedition, your trusted agency to the Himalayan paradise from vibrant Kathmandu. The company provides you with best trekking destination which is solely owned by Nepalese professionals who can lead trekkers and visitors to Nepal’s most visited remote, offbeat and mountainous areas including Himalayas of Nepal, Bhutan, India, and Tibet. ",
  icons: {
    icon: "/materials/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavProvider>
          <Navbar />
          <SubNav />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
