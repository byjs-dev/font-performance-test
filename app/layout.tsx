import "./globals.css";
import localFont from "next/font/local";
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

const univers = localFont({
  src: [
    {
      path: "./assets/UniversLTStd-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/UniversLTStd.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/UniversLTStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/UniversLTStd-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./assets/UniversLTStd-BlackObl.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-univers",
});

const univers_condensed = localFont({
  src: [
    {
      path: "./assets/UniversLTStd-BoldCn.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-univers-condensed",
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
        ${roboto.variable}
        ${roboto_condensed.variable}
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
