"use client";

import { ThemeProvider } from "@material-tailwind/react";

const StyleThemeProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <ThemeProvider>
        {children}
      </ThemeProvider>
    );
};

export default StyleThemeProvider;