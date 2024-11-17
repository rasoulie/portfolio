import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header({ onToggleMenu, basePath="" }) {
  return (
    <header className=" md:min-w-[730px] flex fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full shadow-lg z-10">
      <Logo />
      <Navigation onToggleMenu={onToggleMenu} basePath={basePath}/>
    </header>
  );
}
