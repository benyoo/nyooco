"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { TagFilter } from "@/components/tag-filter";
import type { PostMeta } from "@/lib/blog";

export function BlogListing({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <>
      <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {filtered.map((post, idx) => (
          <BlogCard key={post.slug} post={post} index={idx} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted-foreground mt-10">No posts found for this tag.</p>
      )}
    </>
  );
}
