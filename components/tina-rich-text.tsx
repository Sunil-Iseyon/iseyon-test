"use client";

import React from 'react';
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

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
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-slate-900">{children}</h1>,
            h2: ({ children }) => <h2 className="text-3xl font-bold mb-5 text-slate-900">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl font-bold mb-4 text-slate-800">{children}</h3>,
            h4: ({ children }) => <h2 className="text-xl font-semibold mb-3 text-slate-800">{children}</h2>,
            h5: ({ children }) => <h3 className="text-lg font-semibold mb-2 text-slate-700">{children}</h3>,
            h6: ({ children }) => <h4 className="text-base font-semibold mb-2 text-slate-700">{children}</h4>,
            p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-4 space-y-2">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">{children}</ol>,
            li: ({ children }) => <li className="leading-relaxed text-gray-700">{children}</li>,
            strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
            em: ({ children }) => <em className="italic">{children}</em>,
            code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">{children}</code>,
            pre: ({ children }) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
            blockquote: ({ children }) => {
              // Detect attribution pattern: markdown `> - Source` renders as
              // a <ul> as the last child of the blockquote.  Wrap it in a
              // semantic <footer> so AI crawlers and the expert_quotations
              // rule recognise it as a properly attributed citation.
              const childArray = React.Children.toArray(children);
              const lastChild = childArray[childArray.length - 1];
              const isAttribution =
                React.isValidElement(lastChild) &&
                (lastChild.type === 'ul' || lastChild.type === 'ol');
              if (isAttribution) {
                return (
                  <blockquote className="border-l-4 border-primary pl-4 my-4 bg-slate-50 py-2 rounded-r-lg">
                    <div className="italic text-gray-600">
                      {childArray.slice(0, -1)}
                    </div>
                    <footer className="not-italic text-sm text-gray-500 font-medium mt-1 pl-0">
                      <cite>{lastChild}</cite>
                    </footer>
                  </blockquote>
                );
              }
              return (
                <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-600 bg-slate-50 py-2 rounded-r-lg">
                  {children}
                </blockquote>
              );
            },
            a: ({ href, children }) => (
              <a 
                href={href} 
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-medium"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-300 bg-white">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-slate-50">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-gray-200 bg-white">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-slate-50 transition-colors">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-6 py-4 text-sm text-gray-700 whitespace-normal">
                {children}
              </td>
            ),
            hr: () => <hr className="my-8 border-t-2 border-gray-200" />,
            img: ({ src, alt }) => (
              <img 
                src={src} 
                alt={alt || ''} 
                className="rounded-lg shadow-md max-w-full h-auto my-6"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
  
  // Otherwise render as rich text using TinaMarkdown with custom components
  return (
    <div className={`${className} prose prose-slate max-w-none 
      prose-headings:font-bold prose-headings:text-slate-900
      prose-p:text-gray-700 prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-slate-900 prose-strong:font-bold
      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:text-gray-100
      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
      prose-ul:list-disc prose-ul:ml-6
      prose-ol:list-decimal prose-ol:ml-6
      prose-li:text-gray-700
      prose-table:border-collapse prose-table:w-full
      prose-th:bg-slate-50 prose-th:px-6 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:text-gray-900 prose-th:uppercase
      prose-td:px-6 prose-td:py-4 prose-td:text-sm prose-td:text-gray-700
      prose-img:rounded-lg prose-img:shadow-md`}>
      <TinaMarkdown
        content={content}
        components={{
          // Semantic blockquote with <footer><cite> for attribution lines
          // (satisfies the expert_quotations rule for AI crawlers)
          // TinaMarkdown calls this when the AST node type is 'blockquote'
          blockquote: (props:any) => {
            const children = props?.children;
            const childArray = React.Children.toArray(children);
            const lastChild = childArray[childArray.length - 1];
            // Detect attribution: last child is a <p> whose text starts with an em-dash or hyphen
            const isAttribution =
              React.isValidElement(lastChild) &&
              (() => {
                try {
                  const el = lastChild as React.ReactElement<{ children?: React.ReactNode }>;
                  const text = React.Children
                    .toArray(el.props.children)
                    .map((c) => (typeof c === 'string' ? c : ''))
                    .join('');
                  return text.startsWith('\u2014') || text.startsWith('- ') || text.startsWith('\u2013 ');
                } catch {
                  return false;
                }
              })();
            if (isAttribution) {
              return (
                <blockquote className="border-l-4 border-primary pl-4 my-4 bg-slate-50 py-2 rounded-r-lg not-italic">
                  <div className="italic text-gray-600">{childArray.slice(0, -1)}</div>
                  <footer className="text-sm text-gray-500 font-medium mt-1 not-italic">
                    <cite>{lastChild}</cite>
                  </footer>
                </blockquote>
              );
            }
            return (
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-600 bg-slate-50 py-2 rounded-r-lg">
                {children}
              </blockquote>
            );
          },
        }}
      />
    </div>
  );
}


