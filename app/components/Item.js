import Image from "next/image";
import Button from "./Button";

export default function Item({ image, title, description }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:space-x-8">
      <div className="text-white text-left flex flex-col">
        <h2 className="mb-2 text-2xl font-semibold leading-loose">{title}</h2>
        <p className="leading-loose">{description}</p>
        <Button
          href=""
          label="READ MORE"
          style="w-40 mt-5 text-center whitespace-nowrap text-base px-3 py-3 text-white border border-white bg-black rounded-full font-semibold hover:bg-gray-900 transition-colors duration-200 ease-in-out"
        />
      </div>
      <Image src={image} height={400} width={400} alt={title} />
    </div>
  );
}
