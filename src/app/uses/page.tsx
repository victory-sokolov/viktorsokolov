import type { Metadata } from "next";
import process from "node:process";
import { getContent } from "@/common/content-utils";
import { MdxRemote } from "@/components/Mdx";

export const metadata: Metadata = {
    title: "Uses",
    description: "Tech I'm currently using for coding.",
    alternates: {
        canonical: `${process.env.BASE_URL}/uses`,
        languages: {
            "en-US": "/en-US",
        },
    },
};

const UsesPage: React.FC = async () => {
    const { mdxSource } = await getContent("pages/uses");

    return (
        <>
            <MdxRemote source={mdxSource} />
        </>
    );
};

export default UsesPage;
