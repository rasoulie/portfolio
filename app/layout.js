import localFont from "next/font/local";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
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
      <body
        className={`flex ${openSans.className} antialiased text-black w-auto`}
      >
        {children}
      </body>
    </html>
  );
}
