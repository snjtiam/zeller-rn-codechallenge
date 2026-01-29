import React, { createContext, useContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "theme/themes";
import { Theme } from "types/themeType";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    mode: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [mode, setMode] = useState<ThemeMode>("light");

    const toggleTheme = () =>
        setMode((prev) => (prev === "light" ? "dark" : "light"));

    const theme = useMemo(
        () => (mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    const value = useMemo(
        () => ({ theme, mode, toggleTheme }),
        [theme, mode]
    );

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextValue => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return ctx;
};
