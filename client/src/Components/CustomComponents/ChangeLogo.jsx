import LogoLight from "../../assets/images/whitenyellow.png"
import LogoDark from "../../assets/images/blackandyellow.png";
import { useState, useEffect, useContext } from 'react'
import { Themecontext } from "../../Context/Themecontext";

export const ChangeLogo = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useContext(Themecontext);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) return null;

    if (theme === "light") {
        return (
            <img src={LogoDark} alt="MangaSwipe" className="h-[24px] w-[150px]" />
        );
    } else {
        return (
            <img src={LogoLight} alt="MangaSwipe" className="h-[24px] w-[150px]" />
        );
    }
};