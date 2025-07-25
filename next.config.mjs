import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      "remark-gfm",
      // With options
      ["remark-toc", { heading: "The Table" }],
    ],
    rehypePlugins: [
      // Without options
      "rehype-slug",
      // With options
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
