import { Inter, Montserrat } from "next/font/google";
import "./scss/globals.scss";
import "./scss/__index.scss";
import "normalize.css/normalize.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <a href="#main-content" id="skip-to-content">
          Skip To Main Content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* <Script src="./utils.js" /> */}
      </body>
    </html>
  );
}
