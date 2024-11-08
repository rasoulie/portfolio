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
      className="relative bg-black text-center flex flex-col justify-between items-center min-h-screen"
    >
      <div className="absolute top-0 w-full h-52 bg-dots-pattern opacity-45"></div>

      {/* Middle content wrapper */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <p className="text-2xl sm:text-xl md:text-2xl lg:text-4xl text-white font-medium mb-6">
          HAVE A COOL IDEA?
        </p>
        <p className="text-2xl sm:text-xl md:text-2xl lg:text-4xl text-white font-medium mb-10">
          LET’S WORK TOGETHER :)
        </p>
        <Button
          href="mailto:rasouliee@outlook.com"
          style="text-center whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-black bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 ease-in-out shadow-none hover:shadow-my-yellow-2"
          label="HIRE ME!"
        />
      </div>

      {/* Bottom section with social icons and copyright */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex justify-center space-x-6 mb-10">
          {/* Email Icon */}
          <a
            href="mailto:rasouliee@outlook.com"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/elhamrasouli"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          {/* Behance Icon */}
          <a
            href="https://behance.net/elhamrasouli"
            className="text-gray-400 hover:text-white"
          >
            <FaBehance className="w-8 h-8" />
          </a>
          {/* Telegram Icon */}
          <a
            href="https://t.me/elhamrasoulii"
            className="text-gray-400 hover:text-white"
          >
            <FaTelegramPlane className="w-8 h-8" />
          </a>
        </div>
        <p className="text-white">© Copyright 2024. Made with 💛</p>
      </div>
    </footer>
  );
}
