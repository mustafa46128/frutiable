import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Raleway, Open_Sans, Roboto } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--font-raleway",
});
const openSans = Open_Sans({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "latin"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${openSans.variable}   font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
