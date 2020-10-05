import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";

import initialTheme from "./src/theme/theme";
import { themeReducer, initialState } from "./src/theme/themeReducer";
import { DispatchContext } from "./src/theme/DispatchContext";
import CodeBlock from "./src/templates/BlogPost/CodeBlock";

const components = {
  code: CodeBlock,
};

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
        <CssBaseline />
        <DispatchContext.Provider value={dispatch}>
          <MDXProvider components={components}>{props.children}</MDXProvider>
        </DispatchContext.Provider>
      </ThemeProvider>
    </>
  );
}

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
