import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
    </main>
    </>
  );
}
