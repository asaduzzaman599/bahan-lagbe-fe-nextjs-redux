"use client";
import StyleThemeProvider from "./StyleThemeProvider"

const Providers = ({ children }: React.PropsWithChildren) => {
    return (
      <StyleThemeProvider>
        {children}
      </StyleThemeProvider>
    );
};

export default Providers;