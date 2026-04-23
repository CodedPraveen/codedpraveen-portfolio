"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

function CodeBlock({ className, children }) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative my-5 overflow-hidden rounded-2xl border border-slate-700 bg-[#111827]">
      <button
        type="button"
        onClick={onCopy}
        className="absolute right-3 top-3 rounded-md border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-100 transition hover:bg-slate-700"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto p-4 pr-20 text-sm leading-7 text-sky-300">
        <code className={className}>{code}</code>
      </pre>
    </div>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-100">{children}</h2>
        ),
        ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>,
        ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>,
        li: ({ children }) => <li className="text-slate-300">{children}</li>,
        p: ({ children }) => <p className="my-4 leading-8 text-slate-300">{children}</p>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="font-medium text-indigo-300 underline decoration-indigo-500/60 underline-offset-2 hover:text-indigo-200"
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        ),
        code({ inline, className, children, ...props }) {
          if (inline) {
            return (
              <code
                {...props}
                className="rounded-md bg-slate-800 px-1.5 py-0.5 text-sm text-indigo-200"
              >
                {children}
              </code>
            );
          }
          return <CodeBlock className={className} children={children} />;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
