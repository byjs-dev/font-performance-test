import "./globals.css";
import { Roboto_Flex, Roboto, Roboto_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
  axes: ["GRAD", "XTRA", "YOPQ", "opsz", "slnt", "wdth"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata = {
  title: "font performance test",
  description: "page to test performance of different fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        ${roboto_flex.variable}
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
