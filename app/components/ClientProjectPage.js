"use client";

import { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import Contact from "./Contact";
import ProjectPageContent from "./ProjectPageContent";
import ScrollToTop from "./ScrollToTop";

export default function ClientProjectPage({
  title,
  metadata,
  markdownContent,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Include Header and Modal */}
      <Header onToggleMenu={onToggleMenu} basePath="/" />
      <Modal isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} basePath="/" />

      {/* Main Project Page Content */}
      <ProjectPageContent
        title={title}
        metadata={metadata}
        markdownContent={markdownContent}
      />
      <Contact />
      <ScrollToTop />
    </>
  );
}
