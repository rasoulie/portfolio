import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Elham Rasouli",
  description: "Portfolio of a product designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className} antialiased text-gray-400`}>{children}</body>
    </html>
  );
}
