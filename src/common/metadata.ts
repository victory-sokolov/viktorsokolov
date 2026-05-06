import { config } from "@/common/appconfig";
import type { PostFrontmatter, TipFrontmatter } from "@/types/Post";
import type { Metadata } from "next";

const baseUrl = config.siteUrl.endsWith("/") ? config.siteUrl.slice(0, -1) : config.siteUrl;

export function buildCanonicalUrl(pathname = ""): string {
    const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

    if (normalizedPath === "/") {
        return baseUrl;
    }

    return baseUrl + normalizedPath;
}

export function buildCanonicalAlternates(pathname = ""): Metadata["alternates"] {
    return {
        canonical: buildCanonicalUrl(pathname),
    };
}

export async function generatePostMetadata(
    params: { id: string },
    getPost: (id: string) => Promise<{ currentPost: { frontmatter: PostFrontmatter | TipFrontmatter } } | null>,
    path: string,
): Promise<Metadata | undefined> {
    const post = await getPost(params.id);

    if (!post) {
        return undefined;
    }

    const {
        currentPost: { frontmatter },
    } = post;

    const title = frontmatter.title;
    const description = frontmatter.description;
    const slug = frontmatter.slug;
    const ogImage = frontmatter.featureImage ? buildCanonicalUrl(frontmatter.featureImage) : buildCanonicalUrl("/static/OG.png");

    return {
        title,
        description,
        alternates: buildCanonicalAlternates(`/${path}/${slug}`),
        openGraph: {
            title,
            description,
            type: "article",
            url: buildCanonicalUrl(`/${path}/${slug}`),
            images: ogImage
                ? [
                      {
                          url: ogImage,
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogImage ? [ogImage] : undefined,
        },
    };
}
