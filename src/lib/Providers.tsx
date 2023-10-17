"use client";
import { store } from "@/redux/store"
import { Provider } from 'react-redux'
import StyleThemeProvider from "./StyleThemeProvider"

const Providers = ({ children }: React.PropsWithChildren) => {
    return (
      <Provider store={store}>
        <StyleThemeProvider>
          {children}
        </StyleThemeProvider>
      </Provider>
    );
};

export default Providers;