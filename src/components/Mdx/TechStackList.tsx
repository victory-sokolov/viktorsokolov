import { TagsMapping } from "@/components/Post/PostLabels";

export const TechStackList = () => {
    const TECH_STACK_LIST = [
        "python",
        "django",
        "typescript",
        "postgresql",
        "nextjs",
        "nestjs",
        "react",
        "nodejs",
        "javascript",
    ];
    const tags = Object.entries(TagsMapping).filter(([key]) => TECH_STACK_LIST.includes(key));
    return (
        <ul className="list-none my-3 mb-8 rounded-md border border-[rgb(var(--color-secondary-900))] p-5 bg-[rgb(var(--color-primary-600))] text-white [&_li]:inline-flex [&_span]:pr-4 [&_span]:text-base [&_span]:font-medium">
            {tags.map(([key, value]) => (
                <li key={key}>{value()}</li>
            ))}
        </ul>
    );
};
