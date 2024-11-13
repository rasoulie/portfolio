function SlidingButton({ href, label }) {
  return (
    <a
      href={href}
      className="relative inline-block px-6 py-3 font-semibold text-white bg-black overflow-hidden group rounded-full"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-my-yellow transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
    </a>
  );
}

export default SlidingButton;
