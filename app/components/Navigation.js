"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navigation({ onToggleMenu , basePath }) {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = ["Home", "Projects", "Services", "Resume", "Contact"];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 80% of section is visible
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

  const links = [
    { name: "Home", href: `${basePath}#Home` },
    { name: "Projects", href: `${basePath}#Projects` },
    { name: "Services", href: `${basePath}#Services` },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1QnlWfas1v6yHra6Q9weJQFlGDtrsRan6/view?usp=sharing",
    },
    { name: "Contact", href: `${basePath}#Contact` },
  ];

  return (
    <nav className="text-lg p-0 flex justify-center items-center text-center text-gray-600 h-12">
      <ul className="hidden md:flex space-x-5">
        {links.map((link) => (
          <li key={link.name}>
            {link.href.startsWith("http") ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full h-12 flex items-center justify-center hover:text-black transition-colors duration-200 ease-in-out"
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.href}
                className={`rounded-full h-12 flex items-center justify-center hover:text-black transition-colors duration-200 ease-in-out ${
                  activeSection === link.name ? "text-black" : ""
                }`}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
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
