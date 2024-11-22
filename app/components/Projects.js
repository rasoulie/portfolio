import Item from "./Item";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Improving Mobile Experience with a User-Centered Approach",
      link: "/projects/project1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis libero ac blandit cursus mauris velit vestibulum consectetur massa.",
      image: "/images/project_03/project_03_cover.png",
    },
    {
      id: 2,
      title: "Enhancing Assignment Feedback in Online Teaching Platform",
      link: "/projects/project2",
      description:
        "Improving the assignment feedback process in an online teaching platform and enhancing user experience.",
      image: "/images/project_02/project_02_cover.png",
    },
    {
      id: 3,
      title: "Teacher Dashboard: Tracking Students’ Progress",
      link: "/projects/project3",
      description:
        "Streamlining grading and feedback, improving productivity and enhancing the overall teaching experience.",
      image: "/images/project_03/project_03_cover.png",
    },
  ];

  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center pt-16 pb-20 bg-black text-center px-4 min-h-screen"
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
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
