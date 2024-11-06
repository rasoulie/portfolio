import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header className="justify-between md:items-center md:flex px-10 py-3 shadow-md">
        <Logo />
        <Navigation />
      </header>
    </>
  );
}
