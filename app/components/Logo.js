import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="mr-20">
      <Link href="/" className="flex items-center">
        <div className="bg-black p-0.5 rounded-full mr-3 min-w-[42px] min-h-[42px] transition-shadow duration-300 ease-in-out hover:shadow-my-yellow">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            height={42}
            width={42}
            alt="Avatar"
          />
        </div>
        <h2 className="whitespace-nowrap tracking-wide font-semibold text-lg md:text-xl">
          Elham Rasouli
        </h2>
      </Link>
    </div>
  );
}
