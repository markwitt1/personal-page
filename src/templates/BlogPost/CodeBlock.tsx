import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import duotoneLight from "prism-react-renderer/themes/duotoneLight";
import duotoneDark from "prism-react-renderer/themes/duotoneDark";

export default ({ children, className }) => {
  const language = className?.replace(/language-/, "");
  return (
    <Highlight
      theme={duotoneDark}
      code={children}
      language={language}
      {...defaultProps}
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
