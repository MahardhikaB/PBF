'use client';
import { ThemeContext } from "@/utilities/context/mycontext";
import { useState } from "react";
import Navbar from "./navbar";
import { themes } from "@/utilities/themes/mythemes";

export default function MyApp({ Compnent, pageProps }: { Compnent: any, pageProps: any }) {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...theme,
                }}>
                <Navbar />
                <Compnent {...pageProps} />
            </div>
        </ThemeContext.Provider>
    );
}