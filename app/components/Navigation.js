import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li className="pr-3">
          <Link href="/">Home</Link>
        </li>
        <li className="pr-3">
          <a href="#Projects">Projects</a>
        </li>
        <li className="pr-3">
          <a href="#Services">Services</a>
        </li>
        <li className="pr-3">
          <a href="#Resume">Resume</a>
        </li>
        <li className="pr-3">
          <a href="#Contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
}
