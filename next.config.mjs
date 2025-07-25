import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { heading: "The Table" }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeKatex, { strict: true, throwOnError: true }],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
