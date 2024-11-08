"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navigation({ onToggleMenu }) {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = ["Home", "Projects", "Services", "Resume", "Contact"];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Trigger when 60% of section is visible
    };

    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, options);
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="p-0 flex justify-center items-center text-center text-gray-600 h-12">
      <ul className="hidden md:flex space-x-5">
        <Link href="/">
          {" "}
          <li
            className={`rounded-full h-12 flex items-center justify-center  hover:text-black transition-colors duration-200 ease-in-out ${
              activeSection === "Home" ? "text-black" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <a href="#Projects">
          <li
            className={`rounded-full h-12 flex items-center justify-center hover:text-black transition-colors duration-200 ease-in-out ${
              activeSection === "Projects" ? "text-black" : ""
            }`}
          >
            Projects
          </li>
        </a>
        <a href="#Services">
          <li
            className={`rounded-full h-12 flex items-center justify-center hover:text-black transition-colors duration-200 ease-in-out ${
              activeSection === "Services" ? "text-black" : ""
            }`}
          >
            Services
          </li>
        </a>
        <a
          href="https://drive.google.com/file/d/1repQZp3eY8QR3fymuf4GhG1of-BKgzQu/view?usp=sharing"
          target="_blank"
        >
          <li className="rounded-full h-12 flex items-center justify-center hover:text-black transition-colors duration-200 ease-in-out">
            Resume
          </li>
        </a>
        <a href="#Contact">
          <li
            className={`rounded-full h-12 flex items-center justify-center hover:text-black transition-colors duration-200 ease-in-out ${
              activeSection === "Contact" ? "text-black" : ""
            }`}
          >
            Contact
          </li>
        </a>
      </ul>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 rounded"
          onClick={onToggleMenu}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </nav>
  );
}
