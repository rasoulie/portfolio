import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
//grayscale hover:grayscale-0 transition duration-500 ease-in-out
export default function Item({ image, title, link, description }) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
      <a href="">
        <Image
          className=" rounded-md "
          src={image}
          height={400}
          width={400}
          alt={title}
        />
      </a>
      <div className="text-white text-left flex flex-col pb-8 ">
        <h2 className="mb-2 text-2xl font-bold leading-loose">
          <Link className="hover:border-b border-b-white" href={link}>
            {title}
          </Link>
        </h2>
        <p className="text-xl leading-loose">{description}</p>
        <Button
          href={link}
          label="VIEW CASE STUDY"
          style="w-48 mt-5 text-center whitespace-nowrap text-base px-3 py-3 text-white border border-white bg-black rounded-full font-semibold hover:bg-gray-900 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
}
