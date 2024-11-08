import {
  FaSearch,
  FaPalette,
  FaCodeBranch,
  FaClipboardCheck,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { MdTouchApp } from "react-icons/md";

const services = [
  {
    id: 3,
    icon: <FaSearch size="2em" />,
    title: "UX Research",
    description:
      "Gather insights on users' needs and behaviors to inform design decisions.",
  },
  {
    id: 5,
    icon: <FaPalette size="2em" />,
    title: "UI Design",
    description:
      "Create visually appealing interfaces that enhance user experience.",
  },
  {
    id: 4,
    icon: <MdTouchApp size="2em" />,
    title: "Interaction Design",
    description:
      "Design intuitive interactions to ensure smooth user engagement.",
  },
  {
    id: 1,
    icon: <FiLayout size="2em" />,
    title: "Wireframing",
    description:
      "Plan the layout and structure of each screen before visual design.",
  },
  {
    id: 2,
    icon: <FaCodeBranch size="2em" />,
    title: "Prototyping",
    description:
      "Build interactive prototypes to test and refine user experiences.",
  },
  {
    id: 6,
    icon: <FaClipboardCheck size="2em" />,
    title: "Usability Testing",
    description:
      "Test the product with users to ensure ease of use and effectiveness.",
  },
];

export default function Services() {
  return (
    <section
      id="Services"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
    >
      {/* Title at the middle-top */}
      <h2 className="text-4xl sm:text-2xl md:text-4xl font-semibold">
        Services
      </h2>

      {/* Services grid */}
      <div className="grid gap-x-14 gap-y-28 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/6 py-28">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon with glassy circular background */}
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gray-300/30 backdrop-blur-lg group-hover:shadow-my-yellow-2 transition">
              <div className="text-black">{service.icon}</div>
            </div>
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-600 text-lg px-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
