import { siteConfig } from "@/lib/data";
import { generateOgImage, ogImageSize } from "@/lib/og-image";
import { defaultDescription } from "@/lib/seo";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return generateOgImage({
    title: siteConfig.name,
    subtitle: defaultDescription,
  });
}
