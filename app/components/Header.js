import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header className="justify-between md:items-center md:flex px-7 py-3 border border-b-gray-400">
        <Logo />
        <Navigation />
      </header>
    </>
  );
}
