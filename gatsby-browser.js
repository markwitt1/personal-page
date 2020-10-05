import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import initialTheme from "./src/theme";
import { themeReducer, initialState } from "./src/themeReducer";
import { DispatchContext } from "./src/DispatchContext";
function TopLayout(props) {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  const { darkMode } = state;
  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
        primary: initialTheme.palette.primary,
        secondary: initialTheme.palette.secondary,
        type: darkMode ? "dark" : "light",
      },
    });
  }, [darkMode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DispatchContext.Provider value={dispatch}>
          {props.children}
        </DispatchContext.Provider>
      </ThemeProvider>
    </>
  );
}

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
