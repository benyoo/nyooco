import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogListing } from "@/components/blog-listing";

export const metadata: Metadata = {
  title: "Blog | Ben Yoo",
  description:
    "Thought leadership and case studies on product management, federal IT modernization, and strategy.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-6 lg:px-12 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              &larr; Back to home
            </Link>
          </div>

          <div className="mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on product management, federal modernization, and
              building at scale.
            </p>
            <div className="h-1 w-24 bg-foreground rounded-full mt-6" />
          </div>

          <BlogListing posts={posts} tags={tags} />
        </div>
      </div>
    </div>
  );
}
