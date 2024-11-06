import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link className="justify-between items-center flex" href="/">
        <div className="bg-yellow-400 mr-3 p-0.5 rounded-full">
        <Image
          className="rounded-full"
          src="/avatar.jpg"
          height="42"
          width="42"
          alt="Avatar"
        ></Image>
        </div>
        <h2 className="uppercase font-semibold text-gray-600">Elham Rasouli</h2>
      </Link>
    </div>
  );
}
