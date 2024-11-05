import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link className="justify-between items-center flex" href="/">
        <Image
          className="mr-3 rounded-full"
          src="/avatar.jpg"
          height="42"
          width="42"
          alt="Avatar"
        ></Image>
        <h2 className="uppercase font-semibold">Elham Rasouli</h2>
      </Link>
    </div>
  );
}
