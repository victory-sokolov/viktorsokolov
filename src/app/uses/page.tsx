import type { Metadata } from "next";
import { getContent } from "@/common/content-utils";
import { buildCanonicalAlternates } from "@/common/metadata";
import { MdxRemote } from "@/components/Mdx";

export const metadata: Metadata = {
    title: "Uses",
    description: "Tech I'm currently using for coding.",
    alternates: buildCanonicalAlternates("/uses"),
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
