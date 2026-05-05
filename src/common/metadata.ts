import { config } from "@/common/appconfig";
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
    getPost: (id: string) => Promise<{ currentPost: { frontmatter: any } }>,
    path: string,
): Promise<Metadata | undefined> {
    const {
        currentPost: { frontmatter },
    } = await getPost(params.id);
    if (!frontmatter) {
        return;
    }

    const { title, description, featureImage, slug } = frontmatter;
    const ogImage = `${baseUrl}/${featureImage}`;

    return {
        title,
        description,
        alternates: buildCanonicalAlternates(`/${path}/${slug}`),
        openGraph: {
            title,
            description,
            type: "article",
            url: buildCanonicalUrl(`/${path}/${slug}`),
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}
