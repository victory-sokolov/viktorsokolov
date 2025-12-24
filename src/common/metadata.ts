import type { Metadata } from "next";
import process from "node:process";

const baseUrl = process.env.BASE_URL;

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
        alternates: {
            canonical: `${baseUrl}/${path}/${slug}`,
            languages: {
                "en-US": "/en-US",
            },
        },
        openGraph: {
            title,
            description,
            type: "article",
            url: `${process.env.BASE_URL}/${path}/${slug}`,
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
