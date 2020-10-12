import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { makeStyles } from "@material-ui/core";
import vsDark from "prism-react-renderer/themes/vsDark";

const useStyles = makeStyles((theme) => ({
  code: {
    "& pre code": {
      fontSize: ".9em",
    },
    "& .token.operator": {
      background: "transparent",
    },
    "& .token.keyword": {
      color: "#a6e22e",
    },
  },
}));

export default ({ children, className }) => {
  const language = className?.replace(/language-/, "");
  const s = useStyles();
  return (
    <Highlight
      code={children}
      language={language}
      {...defaultProps}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
