import "../../globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex ${openSans.className} flex-col antialiased text-black w-auto`}
      >
        {children}
      </body>
    </html>
  );
}
