"use client";

import { useEffect, useState } from "react";
import { generateTableOfContents } from "@/lib/utils";

interface TableOfContentsProps {
  content: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const tocItems = generateTableOfContents(content);
    setToc(tocItems);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = toc
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (headings.length === 0) return;

      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold text-foreground mb-4">
          Table of Contents
        </h3>
        <nav className="space-y-1">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm transition-colors hover:text-primary ${
                item.level === 1 ? "font-medium" : ""
              } ${item.level === 2 ? "ml-4" : ""} ${
                item.level === 3 ? "ml-8" : ""
              } ${item.level === 4 ? "ml-12" : ""} ${
                item.level === 5 ? "ml-16" : ""
              } ${item.level === 6 ? "ml-20" : ""} ${
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
