"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Slider from "./Slider";

export default function MarkdownParser({ content }) {
  return (
    <div className="prose lg:prose-xl max-w-none prose-h4:mb-6 prose-h3:font-bold prose-h5:font-bold text-gray-800 prose-strong:hero-highlight prose-strong:font-bold">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]} // Enable raw HTML rendering
        components={{
          div: ({ node, ...props }) => {
            if (props.className === "slider phase4-slider") {
              return (
                <Slider
                  images={[
                    {
                      src: "/images/project_02/wireframe_01.png",
                      alt: "Low-Fidelity Wireframes",
                      width: 1240,
                      height: 440,
                    },
                    {
                      src: "/images/project_02/wireframe_02.png",
                      alt: "High-Fidelity Wireframes",
                      width: 1240,
                      height: 440,
                    },
                    {
                      src: "/images/project_02/wireframe_03.png",
                      alt: "Responsive High-Fidelity Wireframes",
                      width: 1240,
                      height: 440,
                    },
                    {
                      src: "/images/project_02/wireframe_04.png",
                      alt: "Dark Mode Wireframes",
                      width: 1240,
                      height: 440,
                    },
                  ]}
                />
              );
            }
            if (props.className === "slider finaloutcome-slider") {
              return (
                <Slider
                  images={[
                    {
                      src: "/images/project_02/final_01.png",
                      alt: "Final Outcome 1",
                      width: 1240,
                      height: 440,
                    },
                    {
                      src: "/images/project_02/final_02.png",
                      alt: "Final Outcome 2",
                      width: 1240,
                      height: 440,
                    },
                    {
                      src: "/images/project_02/final_03.png",
                      alt: "Final Outcome 3",
                      width: 1240,
                      height: 440,
                    },
                  ]}
                />
              );
            }
            return <div {...props} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
