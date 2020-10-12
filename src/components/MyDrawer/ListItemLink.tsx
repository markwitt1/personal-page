import React, { Component, HTMLProps } from "react";
import {
  IconProps,
  Link as MuiLink,
  LinkTypeMap,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@material-ui/core";
import { ListItem, makeStyles } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Link from "gatsby-link";
import { OutboundLink } from "gatsby-plugin-google-analytics";

interface ListItemLinkProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  primary: string;
  to: string;
  onClick: () => void;
  external?: boolean;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  Icon,
  primary,
  to,
  onClick,
  external,
}) => {
  const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  }));
  const s = useStyles();
  const linkProps = external
    ? { href: to, target: "_blank", rel: "noreferrer", component: OutboundLink }
    : {
        to,
        component: Link,
      };
  return (
    <>
      <MuiLink className={s.link} {...linkProps}>
        <ListItem button onClick={onClick}>
          {Icon ? (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          ) : null}

          <ListItemText primary={primary} />
        </ListItem>
      </MuiLink>
    </>
  );
};

export default ListItemLink;
