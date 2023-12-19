import "./scss/globals.scss";
import "./scss/__index.scss";
import "normalize.css/normalize.css";

import { Inter, Montserrat } from "next/font/google";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <a href="#main-content" id="skip-to-content">
            Skip To Main Content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>

          <Script src={"/script.js"} strategy="lazyOnload" />
        </body>
      </html>
    </ThemeProvider>
  );
}
