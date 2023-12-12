import { Inter } from "next/font/google";
import "./scss/__index.scss";
import "normalize.css/normalize.css";
import Link from "next/link";
import { CounterProvider } from "./components/zLearning/ServerClient/CounterContext";

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
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </header>
        <CounterProvider>{children}</CounterProvider>;
        {/* <ThemeProvider>{children}</ThemeProvider> */}
      </body>
    </html>
  );
}
