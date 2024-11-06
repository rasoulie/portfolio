import Button from "./Button";

export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
        <div className="w-5/6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          I am a product designer with a holistic view on digital product design and development.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Bridging the gap between design and development for a seamless user experience.
        </p>
        </div>
        <div className="flex space-x-4">
          <Button href="#contact" label="Hire Me" />
          <Button className="border border-yellow-400 bg-color-white" href="#projects" label="Projects" />
        </div>
      </section>
    );
  }