import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
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
    <html lang="en" className={`${roboto_flex.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
