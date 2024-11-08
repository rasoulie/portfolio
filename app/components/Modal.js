import Link from "next/link";
import { HiX } from "react-icons/hi";

export default function Modal({ isMenuOpen, onToggleMenu }) {
  return (
    <>
      {/* Mobile Slide-in Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-50 flex flex-col items-start p-6 space-y-4 md:hidden transform transition-transform duration-300 ease-in-out">
          <button
            className="text-3xl absolute top-4 right-4 text-white"
            onClick={onToggleMenu}
          >
            <HiX />
          </button>
          <nav className="flex flex-col items-start mt-10 space-y-4">
            <Link
              href="/"
              className="text-lg font-semibold hover:text-gray-300"
              onClick={onToggleMenu}
            >
              Home
            </Link>
            <Link
              href="#Projects"
              className="text-lg font-semibold hover:text-gray-300"
              onClick={onToggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#Services"
              className="text-lg font-semibold hover:text-gray-300"
              onClick={onToggleMenu}
            >
              Services
            </Link>
            <Link
              href="https://drive.google.com/file/d/1repQZp3eY8QR3fymuf4GhG1of-BKgzQu/view?usp=sharing"
              target="_blank"
              className="text-lg font-semibold hover:text-gray-300"
              onClick={onToggleMenu}
            >
              Resume
            </Link>
            <Link
              href="#Contact"
              className="text-lg font-semibold hover:text-gray-300"
              onClick={onToggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
