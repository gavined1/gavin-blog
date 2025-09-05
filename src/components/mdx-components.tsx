/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface MDXComponentsProps {
  [key: string]: React.ComponentType<any>;
}

export const mdxComponents: MDXComponentsProps = {
  // Override default HTML elements
  h1: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <h1
      className="text-4xl font-bold text-foreground mb-6 mt-8 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <h2
      className="text-3xl font-semibold text-foreground mb-4 mt-8 first:mt-0 border-b border-border pb-2"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <h3
      className="text-2xl font-semibold text-foreground mb-3 mt-6 first:mt-0"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <h4
      className="text-xl font-semibold text-foreground mb-2 mt-4 first:mt-0"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <h5
      className="text-lg font-semibold text-foreground mb-2 mt-4 first:mt-0"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <h6
      className="text-base font-semibold text-foreground mb-2 mt-4 first:mt-0"
      {...props}
    >
      {children}
    </h6>
  ),
  p: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="text-foreground mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  a: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: ReactNode;
    [key: string]: unknown;
  }) => {
    const isExternal = href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <ul
      className="list-disc list-inside mb-4 space-y-2 text-foreground"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <ol
      className="list-decimal list-inside mb-4 space-y-2 text-foreground"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="text-foreground" {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="border-l-4 border-border pl-4 py-2 mb-4 italic text-muted-foreground bg-muted/50 rounded-r"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <code
      className="bg-muted text-foreground px-2 py-1 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <pre
      className="bg-muted border border-border rounded-lg p-4 mb-4 overflow-x-auto"
      {...props}
    >
      {children}
    </pre>
  ),
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg mb-4 w-full h-auto"
      {...props}
    />
  ),
  table: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <th
      className="border border-border px-4 py-2 bg-muted font-semibold text-left"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <td className="border border-border px-4 py-2" {...props}>
      {children}
    </td>
  ),
  hr: ({ ...props }: { [key: string]: unknown }) => (
    <hr className="border-border my-8" {...props} />
  ),
};
