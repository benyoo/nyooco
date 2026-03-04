import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { BlogPost } from "@/components/blog-post";
import { Nav } from "@/components/nav";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Ben Yoo`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="px-6 lg:px-12 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              &larr; Back to blog
            </Link>
          </div>

          <BlogPost post={post} />
        </div>
      </div>
    </div>
  );
}
