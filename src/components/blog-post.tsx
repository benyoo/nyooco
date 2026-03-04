import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/blog";

export function BlogPost({ post }: { post: Post }) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div
        className="prose prose-invert prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
