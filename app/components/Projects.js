import Item from "./Item";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis libero ac blandit cursus mauris velit vestibulum consectetur massa.",
      image: "/images/project_03_class_dashboard_elham_rasouli.png", // Replace with the actual path to your image
    },
    {
      id: 2,
      title: "Project title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis libero ac blandit cursus mauris velit vestibulum consectetur massa.",
      image: "/images/project_03_class_dashboard_elham_rasouli.png", // Replace with the actual path to your image
    },
    {
      id: 3,
      title: "Project title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis libero ac blandit cursus mauris velit vestibulum consectetur massa.",
      image: "/images/project_03_class_dashboard_elham_rasouli.png", // Replace with the actual path to your image
    },
  ];

  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center pt-16 pb-20 bg-black text-center px-4"
    >
      <div className="w-4/6 md:w-4/6 lg:w-2/3">
        <h2 className="text-white text-4xl sm:text-2xl md:text-4xl font-semibold mb-16">
          Projects
        </h2>
        <div className="flex flex-col gap-20 justify-center">
          {projects.map((project) => (
            <Item
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
