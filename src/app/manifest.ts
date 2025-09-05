import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.manifest.name,
    short_name: siteConfig.manifest.shortName,
    description: siteConfig.manifest.description,
    start_url: siteConfig.manifest.startUrl,
    display: siteConfig.manifest.display,
    background_color: siteConfig.manifest.backgroundColor,
    theme_color: siteConfig.manifest.themeColor,
    orientation: siteConfig.manifest.orientation,
    icons: [
      {
        src: siteConfig.images.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteConfig.images.icon512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
