export default function Button({ href, label }) {
    return (
      
        <a href={href}
          className="px-6 py-3 text-black bg-yellow-400 rounded-full font-semibold hover:bg-yellow-500 transition duration-200 ease-in-out"
        >
          {label}
        </a>
    );
}