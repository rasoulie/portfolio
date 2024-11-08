import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col bg-dots-pattern items-center justify-center h-screen bg-gray-50 text-center px-4"
    >
      <div className="mt-10 w-4/6 md:w-4/6 lg:w-2/3 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-left mb-16 leading-snug sm:leading-normal md:leading-relaxed lg:leading-normal">
          Hi, I'm a Product Designer with a
          <span className="hero-highlight"> * Holistic</span> Perspective on
          Design & Development.
        </h1>
        <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button
            href="#Projects"
            style="text-center whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-white bg-black rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 ease-in-out"
            label="SEE PROJECTS"
          />
          <Button
            href="https://drive.google.com/file/d/1repQZp3eY8QR3fymuf4GhG1of-BKgzQu/view?usp=sharing"
            target="_blank"
            style="text-center whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-black border border-black bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            label="MORE ABOUT ME"
          />
        </div>
      </div>
    </section>
  );
}
