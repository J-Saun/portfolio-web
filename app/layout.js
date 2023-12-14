import { Inter, Montserrat } from "next/font/google";
import "./scss/globals.scss";
import "./scss/__index.scss";
import "normalize.css/normalize.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "FN | Portfolio",
  // description: "Building Beautiful Functionality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <a href="/">Skip To Main Content</a>
        <header>
          <div className="container">
            <a href="/">
              <abbr title="Full Name">FN</abbr>
              <span className="sr-only">Portfolio Home Page</span>
            </a>
            <div>
              <p>My Portfolio</p>
              <p>{metadata.description}</p>
            </div>
            <Navbar />
          </div>
        </header>

        {children}
        {/* SCRIPTS  */}
        <script src="script.js"></script>
      </body>
    </html>
  );
}
