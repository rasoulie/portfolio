"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";
import Modal from "./components/Modal";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onToggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Header onToggleMenu={onToggleMenu} />
      <Modal isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact/>
      </main>
    </>
  );
}
