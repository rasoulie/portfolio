import {
  FaEnvelope,
  FaLinkedin,
  FaBehance,
  FaTelegramPlane,
} from "react-icons/fa";
import Button from "./Button";

export default function Contact() {
  return (
    <footer
      id="Contact"
      className="bg-black py-12 text-center flex flex-col items-center justify-center min-h-screen"
    >
      <h3 className="text-lg text-white font-medium mb-6">
        HAVE A COOL IDEA? LET’S WORK TOGETHER!
      </h3>
      <Button
        style="text-center whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-white bg-black rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 ease-in-out mb-6"
        label="HIRE ME"
      />
      <div className="flex justify-center mt-6 space-x-6">
        {/* Email Icon */}
        <a
          href="mailto:your-email@example.com"
          className="text-gray-400 hover:text-white"
        >
          <FaEnvelope className="w-8 h-8" />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/your-profile"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        {/* Behance Icon */}
        <a
          href="https://behance.net/your-profile"
          className="text-gray-400 hover:text-white"
        >
          <FaBehance className="w-8 h-8" />
        </a>
        {/* Telegram Icon */}
        <a
          href="https://t.me/your-username"
          className="text-gray-400 hover:text-white"
        >
          <FaTelegramPlane className="w-8 h-8" />
        </a>
      </div>
      <p className="text-white mt-6">© Copyright 2024. Made with 💛</p>
    </footer>
  );
}
