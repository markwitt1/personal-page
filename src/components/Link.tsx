import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link as MuiLink } from "@material-ui/core";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Link = (props) =>
  /^\/(?!\/)/.test(props.href || props.to) ? (
    <MuiLink
      component={GatsbyLink}
      to={props.href || props.to}
      onClick={() => console.log("internal")}
      {...props}
    />
  ) : (
    <MuiLink
      onClick={() => console.log("external")}
      component={OutboundLink}
      target="_blank"
      rel="noopener noreferrer"
      href={props.href || props.to}
      {...props}
    />
  );

export default Link;
