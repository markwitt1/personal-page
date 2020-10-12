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
import Link from "../Link";
import { OutboundLink } from "gatsby-plugin-google-analytics";

interface ListItemLinkProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  primary: string;
  to: string;
  onClick: () => void;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  Icon,
  primary,
  to,
  onClick,
}) => {
  const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  }));
  const s = useStyles();

  return (
    <Link className={s.link} to={to}>
      <ListItem button onClick={onClick}>
        {Icon ? (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        ) : null}

        <ListItemText primary={primary} />
      </ListItem>
    </Link>
  );
};

export default ListItemLink;
