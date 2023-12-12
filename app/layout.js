import { Inter } from "next/font/google";
import "./scss/globals.scss";
import "./scss/__index.scss";
import "normalize.css/normalize.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Building Beautiful Functionality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
            <p>My Portfolio</p>
            <p>{metadata.description}</p>
          </div>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
