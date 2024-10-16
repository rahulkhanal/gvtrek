import { Inter, Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { NavProvider } from "./_context/NavContext";
import { SubNav } from "./_components/SubNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from "@mantine/core";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Paurakh Travels: The best travel agency in Nepal",
  description:
    "Explore Nepal with Paurakh Travels, your trusted agency to the Himalayan paradise from vibrant Kathmandu. The company provides you with best trekking destination which is solely owned by Nepalese professionals who can lead trekkers and visitors to Nepal’s most visited remote, offbeat and mountainous areas including Himalayas of Nepal, Bhutan, India, and Tibet. ",
  icons: {
    icon: "/materials/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<div>Loading...</div>}>
        <body className={poppins.className} suppressHydrationWarning={true}>
          <NavProvider>
            <Navbar />
            <SubNav />
            <MantineProvider>
              {children}
            </MantineProvider>
            <Footer />
          </NavProvider>
        </body>
      </Suspense>
    </html>
  );
}
