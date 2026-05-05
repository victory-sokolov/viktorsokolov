const WORD_SEPARATOR_REGEX = /\s+/;

export const calculateReadTime = (text: string) => {
    const WPM = 250;
    const textLength = text.trim().split(WORD_SEPARATOR_REGEX).length;
    const readTime = Math.ceil(textLength / WPM).toString();
    return `${readTime} min read`;
};
