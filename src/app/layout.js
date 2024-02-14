import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";

import { repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="hr" className={clsx(poppins.className)}>
      <body className="overflow-x-hidden antialiased">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
