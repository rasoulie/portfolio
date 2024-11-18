"use client";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useState } from "react";

export default function MarkdownParser({ content }) {
  const [parsedContent, setParsedContent] = useState("");

  useEffect(() => {
    async function parseMarkdown() {
      const result = await remark()
        .use(html, { sanitize: false })
        .process(content);
      setParsedContent(result.toString());
    }
    parseMarkdown();
  }, [content]);

  return (
    <div
      className="prose lg:prose-xl max-w-none prose-h4:mb-10 prose-h3:font-bold prose-h5:font-bold text-gray-800 prose-strong:hero-highlight prose-strong:font-bold"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
}
