"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TagFilter({
  tags,
  activeTag,
  onChange,
}: {
  tags: string[];
  activeTag: string | null;
  onChange: (tag: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => onChange(null)}>
        <Badge
          variant={activeTag === null ? "default" : "secondary"}
          className={cn("cursor-pointer transition-colors text-xs")}
        >
          All
        </Badge>
      </button>
      {tags.map((tag) => (
        <button key={tag} onClick={() => onChange(activeTag === tag ? null : tag)}>
          <Badge
            variant={activeTag === tag ? "default" : "secondary"}
            className={cn("cursor-pointer transition-colors text-xs")}
          >
            {tag}
          </Badge>
        </button>
      ))}
    </div>
  );
}
