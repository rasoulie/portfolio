import Link from "next/link";
import { HiX } from "react-icons/hi";

export default function Modal({ isMenuOpen, onToggleMenu, basePath = "" }) {
  const links = [
    { name: "Home", href: `${basePath}#Home` },
    { name: "Projects", href: `${basePath}#Projects` },
    { name: "Services", href: `${basePath}#Services` },
    { name: "Resume", href: "https://drive.google.com/file/d/1repQZp3eY8QR3fymuf4GhG1of-BKgzQu/view?usp=sharing", external: true },
    { name: "Contact", href: `${basePath}#Contact` },
  ];

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
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-gray-300"
                  onClick={onToggleMenu}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold hover:text-gray-300"
                  onClick={onToggleMenu}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
}
