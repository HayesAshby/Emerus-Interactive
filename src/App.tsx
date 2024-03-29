import { HashRouter } from "react-router-dom";
import AppBarWithTheme from "./AppBarWithTheme";
import React from "react";
import Routing from "./routing";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});

/**
 * App.
 * @return {any}
 */
export default function App() {
  return (
    <HashRouter>
      <AppBarWithTheme>
        <Routing />
      </AppBarWithTheme>
    </HashRouter>
  );
}
