import React from "react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { generatePostMetadata } from "@/common/metadata";
import { getPostBySlug } from "@/common/posts";
import { getTipBySlug } from "@/common/tips";

let currentPathname = "/blog/solid-principles-in-action";

vi.mock("next/dynamic", () => ({
    default: (): React.ComponentType => () => null,
}));

vi.mock("next/image", () => ({
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => React.createElement("img", props),
}));

vi.mock("next/navigation", () => ({
    usePathname: () => currentPathname,
    notFound: () => {
        throw new Error("NEXT_NOT_FOUND");
    },
}));

const jsonLdCalls: Array<{ data: Record<string, unknown>; id: string }> = [];

vi.mock("@/components/Seo/JsonLd", () => ({
    JsonLd: ({ data, id }: { data: Record<string, unknown>; id: string }): null => {
        jsonLdCalls.push({ data, id });
        return null;
    },
}));

const blogSlug = "solid-principles-in-action";
const tipSlug = "delete-all-your-node_modules-venv-and-vendor-folders-periodically";

let blogPageModule: typeof import("../src/app/blog/[id]/page");
let tipPageModule: typeof import("../src/app/tips/[id]/page");
let blogPost: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>;
let tipPost: NonNullable<Awaited<ReturnType<typeof getTipBySlug>>>;

beforeAll(async () => {
    blogPageModule = await import("../src/app/blog/[id]/page");
    tipPageModule = await import("../src/app/tips/[id]/page");
    blogPost = (await getPostBySlug(blogSlug)) as NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>;
    tipPost = (await getTipBySlug(tipSlug)) as NonNullable<Awaited<ReturnType<typeof getTipBySlug>>>;
});

beforeEach(() => {
    currentPathname = "/blog/solid-principles-in-action";
    jsonLdCalls.length = 0;
});

const makeParams = (id: string) => Promise.resolve({ id });

describe("content route pages", () => {
    it("builds blog metadata from the real post content", async () => {
        const metadata = await blogPageModule.generateMetadata({
            params: makeParams(blogSlug),
        });

        expect(metadata?.title).toBe(blogPost.currentPost.frontmatter.title);
        expect(metadata?.description).toBe(blogPost.currentPost.frontmatter.description);
        expect(metadata?.alternates?.canonical).toBe(`https://viktorsokolov.com/blog/${blogSlug}`);
        expect(metadata?.openGraph?.url).toBe(`https://viktorsokolov.com/blog/${blogSlug}`);
    });

    it("renders the real blog page with canonical JSON-LD", async () => {
        currentPathname = `/blog/${blogSlug}`;

        const element = await blogPageModule.default({
            params: makeParams(blogSlug),
        });
        const html = renderToStaticMarkup(element);

        expect(html).toContain(blogPost.currentPost.frontmatter.title);
        expect(html).toContain(blogPost.currentPost.frontmatter.featureImage!);
        expect(jsonLdCalls).toHaveLength(1);
        expect(jsonLdCalls[0].data.url).toBe(`https://viktorsokolov.com/blog/${blogSlug}`);
        expect(jsonLdCalls[0].data.image).toBe(`https://viktorsokolov.com${blogPost.currentPost.frontmatter.featureImage}`);
    });

    it("builds tip metadata from the real tip content", async () => {
        const metadata = await tipPageModule.generateMetadata({
            params: makeParams(tipSlug),
        });

        expect(metadata?.title).toBe(tipPost.currentPost.frontmatter.title);
        expect(metadata?.description).toBe(tipPost.currentPost.frontmatter.description);
        expect(metadata?.alternates?.canonical).toBe(`https://viktorsokolov.com/tips/${tipSlug}`);
        expect(metadata?.openGraph?.url).toBe(`https://viktorsokolov.com/tips/${tipSlug}`);
    });

    it("renders the real tip page with canonical JSON-LD", async () => {
        currentPathname = `/tips/${tipSlug}`;

        const element = await tipPageModule.default({
            params: makeParams(tipSlug),
        });
        const html = renderToStaticMarkup(element);

        expect(html).toContain(tipPost.currentPost.frontmatter.title);
        expect(html).toContain("Embedded Substack email subscription form");
        expect(jsonLdCalls).toHaveLength(1);
        expect(jsonLdCalls[0].data.url).toBe(`https://viktorsokolov.com/tips/${tipSlug}`);
        expect(jsonLdCalls[0].data.image).toBe(`https://viktorsokolov.com${tipPost.currentPost.frontmatter.featureImage}`);
    });

    it("returns a 404 signal when the requested post does not exist", async () => {
        await expect(
            blogPageModule.default({
                params: makeParams("does-not-exist"),
            }),
        ).rejects.toThrow("NEXT_NOT_FOUND");
    });
});
