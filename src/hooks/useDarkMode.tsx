import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState(undefined);

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
            window.localStorage.setItem("theme", theme);
        }
    }, [theme]);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
        setTheme(initialColorValue);
    }, []);

    return [theme, toggleTheme];
};
