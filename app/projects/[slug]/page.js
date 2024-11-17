import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ClientProjectPage from "../../components/ClientProjectPage";

export default function Project({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content/projects", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data = {} } = matter(fileContent);

  return (
    <ClientProjectPage
      title={data.title || "Untitled"}
      metadata={data}
      markdownContent={content}
    />
  );
}

export async function generateStaticParams() {
  const projectDir = path.join(process.cwd(), "content/projects");
  const filenames = fs.readdirSync(projectDir);

  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}
