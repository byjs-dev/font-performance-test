import "./globals.css";
// import localFont from "next/font/local";
import { Roboto_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
  axes: ["GRAD", "XTRA", "YOPQ", "opsz", "slnt", "wdth"],
});

// const univers_next = localFont({
//   src: "./assets/",
//   display: "swap",
//   variable: "--font-univers-next",
// });

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
      <body className={`${roboto_flex.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
