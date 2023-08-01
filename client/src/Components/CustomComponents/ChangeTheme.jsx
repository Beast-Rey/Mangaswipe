import { Themecontext } from "../../Context/Themecontext";
import { useContext, useState, useEffect } from "react";

export const ThemeChange = () => {
    const { theme, setTheme } = useContext(Themecontext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) return null;

    if (theme === "light") {
        return (
            <i className="fa-solid fa-sun" onClick={() => setTheme("dark")}></i>
        );
    } else {
        return (
            <i className="fa-solid fa-moon" onClick={() => setTheme("light")}></i>
        );
    }
};