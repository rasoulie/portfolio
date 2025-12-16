import Button from "./Button";
import SlidingButton from "./SlidingButton";
// h1 text size :
export default function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col bg-dots-pattern items-center justify-center min-h-screen bg-gray-50 text-center px-4 py-12"
    >
      <div className="mt-20 md:mt-10 sm:mt-20 w-4/6 md:w-5/6 lg:w-2/3 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-snug sm:leading-normal md:leading-relaxed lg:leading-normal font-semibold text-left mb-8 lg:mb-16 sm:mb-8 md:mb-8">
          Hi, I&apos;m a Product Designer with a{" "}
          <span className="hero-highlight">Holistic</span> Perspective on Design
          & Development.
        </h1>
        <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button
            href="#Projects"
            style="text-center whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-white bg-black rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 ease-in-out"
            label="SEE PROJECTS"
          />
          <Button
            href="https://drive.google.com/file/d/1QnlWfas1v6yHra6Q9weJQFlGDtrsRan6/view?usp=sharing"
            target="_blank"
            style="text-center whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-black border border-black bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            label="MORE ABOUT ME"
          />
        </div>
      </div>
    </section>
  );
}
