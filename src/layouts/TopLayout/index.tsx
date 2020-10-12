import React, { FC, HTMLProps, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";
import initialTheme from "../../theme/theme";
import { themeReducer, initialState } from "../../theme/themeReducer";
import { DispatchContext } from "../../theme/DispatchContext";
import CodeBlock from "../../templates/BlogPost/CodeBlock";
import { Modal } from "@material-ui/core";
import materialComponents from "./materialComponents";
import Link from "../../components/Link";

const useStyles = makeStyles({
  img: {
    cursor: "pointer",
  },
  imgExpanded: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%,-50%)",
    "&:focus": {
      outline: "none",
    },
  },
});
const ExpandableImage = (props) => {
  const s = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <img className={s.img} {...props} onClick={() => setExpanded(true)}></img>
      ;
      {expanded && (
        <Modal open={expanded} onClose={() => setExpanded(false)}>
          <img className={s.imgExpanded} {...props}></img>
        </Modal>
      )}
    </>
  );
};

const components = {
  ...materialComponents,
  code: CodeBlock,
  a: Link,
  img: ExpandableImage,
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
