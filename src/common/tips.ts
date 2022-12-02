import matter from "gray-matter";
import path from "path";
import { toLongDate } from "./utils";
import fs from "fs";
import { getPostData } from "./content-utils";
import { TipFrontmatter } from "src/types/Post";

export const getAllTips = (): TipFrontmatter[] => {
    const twitterTipsPath = "content/tips";
    const tipsPath = path.join(process.cwd(), twitterTipsPath);

    const tips = fs.readdirSync(tipsPath).map(slug => {
        const file = matter.read(`${tipsPath}/${slug}/${slug}.mdx`);
        const data = file.data;

        return {
            ...data,
            content: file.content,
            date: toLongDate(data.date),
            featureImage: `/tips/${slug}/${data.featureImage}`
        };
    });
    return JSON.parse(JSON.stringify(tips));
};

export const getTipBySlug = async (slug: string) => {
    const tips = getAllTips();
    return getPostData(tips, slug);
};
