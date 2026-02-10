"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import ReactMarkdown from 'react-markdown';

interface TinaRichTextProps {
  content: TinaMarkdownContent | string | null | undefined;
  className?: string;
}

export function TinaRichText({ content, className }: TinaRichTextProps) {
  if (!content) return null;
  
  // If content is a string (markdown format), render it with ReactMarkdown
  if (typeof content === "string") {
    return (
      <div className={className}>
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
            h2: ({ children }) => <h2 className="text-3xl font-bold mb-5">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl font-bold mb-4">{children}</h3>,
            h4: ({ children }) => <h4 className="text-xl font-semibold mb-3">{children}</h4>,
            h5: ({ children }) => <h5 className="text-lg font-semibold mb-2">{children}</h5>,
            h6: ({ children }) => <h6 className="text-base font-semibold mb-2">{children}</h6>,
            p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
            em: ({ children }) => <em className="italic">{children}</em>,
            code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
            blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
  
  // Otherwise render as rich text using TinaMarkdown
  return (
    <div className={className}>
      <TinaMarkdown content={content} />
    </div>
  );
}

