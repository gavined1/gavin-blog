import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbStructuredData } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  const structuredData = generateBreadcrumbStructuredData(allItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        className="flex items-center space-x-1 text-sm text-muted-foreground mb-6"
        aria-label="Breadcrumb"
      >
        {allItems.map((item, index) => (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
            )}
            {index === 0 ? (
              <Link
                href={item.url}
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
            ) : index === allItems.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
