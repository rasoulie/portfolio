import MarkdownParser from "./MarkdownParser";

export default function ProjectPageContent({
  title,
  metadata,
  markdownContent,
}) {
  return (
    <>
      <div className="flex flex-col bg-dots-pattern items-center justify-center text-gray-800  bg-gray-50 text-center px-4 pb-12 pt-24">
        <section className="mt-28 md:mt-10 sm:mt-20 w-4/6 md:w-5/6 lg:w-2/3 text-left">
          <h1 className="text-4xl font-bold text-center mb-12">{title}</h1>

          {/* Dynamic Key-Value Data */}
          <div className="flex mb-8 justify-between items-center">
            {Object.entries(metadata)
              .slice(1)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col justify-center items-start relative pl-6"
                >
                  {/* Add the vertical line */}
                  <div className="absolute left-0 top-0 h-7 w-1 bg-gray-800 rounded-full"></div>

                  {/* Content */}
                  <h3 className="font-bold capitalize mb-2">{key}</h3>
                  <span>{value}</span>
                </div>
              ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800  bg-gray-50 text-center px-4 pb-24 mt-0 mb-0">
        <section className="w-4/6 md:w-5/6 lg:w-2/3 text-left  mt-0 mb-0">
          {/* Render Markdown Content */}
          <div className="prose lg:prose-xl max-w-full">
            <MarkdownParser content={markdownContent} />
          </div>
        </section>
      </div>
    </>
  );
}
