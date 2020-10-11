import React, { Component } from "react";
import {
  IconProps,
  Link as MuiLink,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@material-ui/core";
import Link from "gatsby-link";
import { ListItem, makeStyles } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

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
  const props = external
    ? { href: to, target: "_blank" }
    : {
        to,
        component: Link,
      };
  return (
    <>
      <MuiLink className={s.link} {...props}>
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
