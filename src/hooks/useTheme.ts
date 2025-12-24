"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme") as Theme | null;

        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("light", storedTheme === "light");
        } else {
            // Default to dark theme
            setTheme("dark");
            document.documentElement.classList.remove("light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("light", newTheme === "light");
    };

    return {
        theme,
        toggleTheme,
        mounted,
    };
}
