"use client";

import * as runtime from "react/jsx-runtime";

interface MdxContentProps {
  code: string;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

/**
 * Renders compiled MDX content from Velite.
 */
export function MdxContent({ code }: MdxContentProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <Component />
    </div>
  );
}
