import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";

import initialTheme from "../theme/theme";
import { themeReducer, initialState } from "../theme/themeReducer";
import { DispatchContext } from "../theme/DispatchContext";
import CodeBlock from "../templates/BlogPost/CodeBlock";
import { Link } from "@material-ui/core";

const components = {
  code: CodeBlock,
  a: Link,
};

function TopLayout(props) {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  const { darkMode } = state;
  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
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

export default TopLayout;
