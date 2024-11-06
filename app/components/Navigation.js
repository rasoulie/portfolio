"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = ["Home", "Projects", "Services", "Resume", "Contact"];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of section is visible
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
    <nav className="p-0 flex justify-center items-center text-center h-12">
      <ul className="flex space-x-5">
      <Link href="/"> <li className={`px-5 rounded-full h-12 flex items-center justify-center ${
            activeSection === "Home" ? "bg-gray-100" : ""
          }`}>
         Home
        </li></Link>
         <a href="#Projects"><li className="px-5 rounded-full h-12 flex items-center justify-center hover:bg-gray-100">
         Projects
        </li></a>
        <a href="#Services"><li className="px-5 rounded-full h-12 flex items-center justify-center hover:bg-gray-100">
          Services
        </li></a>
        <a href="#Resume"><li className="px-5 rounded-full h-12 flex items-center justify-center hover:bg-gray-100">
          Resume
        </li></a>
         <a href="#Contact"><li className="px-5 rounded-full h-12 flex items-center justify-center hover:bg-gray-100">
         Contact
        </li></a>
      </ul>
    </nav>
  );
}
