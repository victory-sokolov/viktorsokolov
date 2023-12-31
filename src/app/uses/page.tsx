import { getContent } from "@/common/content-utils";
import { MdxRemote } from "@/components/Mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uses",
    description: "Tech I'm currently using for coding."
};

const UsesPage: React.FC = async () => {
    const { mdxSource } = await getContent("pages/uses");

    return (
        <>
            <MdxRemote mdxSource={mdxSource} />
        </>
    );
};

export default UsesPage;
