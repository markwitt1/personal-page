import React from "react";
import {
  Hidden,
  Divider,
  List,
  SwipeableDrawer,
  makeStyles,
  ListItem,
  ListItemText,
  Drawer,
  ListItemIcon,
  IconButton,
  SvgIcon,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from "@material-ui/icons/Chat";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DevBadge from "../../../static/dev-badge.svg";
import ListItemLink from "./ListItemLink";

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
}

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  list: {
    width: 240,
  },
  nav: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexShrink: 0,
    },
  },
  devIcon: {
    padding: "0.07rem",
  },
}));
console.log(DevBadge);
const DevIcon = () => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.devIcon}
      component={DevBadge}
      viewBox="0 0 448 512"
    />
  );
};
const MyDrawer = ({ drawerOpen, setDrawerOpen }: Props) => {
  const classes = useStyles();

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const drawerContent = (
    <>
      <ListItem className={classes.toolbar}>
        <ListItemText primary="Navigation" />
      </ListItem>
      <Divider />
      <List className={classes.list}>
        <ListItemLink
          Icon={PersonIcon}
          primary="About"
          to="/"
          onClick={closeDrawer}
        />
        <ListItemLink
          Icon={WorkIcon}
          primary="Projects"
          to="/projects"
          onClick={closeDrawer}
        />
        <ListItemLink
          Icon={SchoolIcon}
          primary="CV"
          to="/cv"
          onClick={closeDrawer}
        />

        <ListItemLink
          Icon={ChatIcon}
          primary="Blog"
          to="/blog"
          onClick={closeDrawer}
        />
        <Divider />

        <ListItemLink
          Icon={TwitterIcon}
          primary="/markwitt_me"
          to="https://twitter.com/markwitt_me"
          onClick={closeDrawer}
        />
        <ListItemLink
          Icon={LinkedInIcon}
          primary="/mark-witt"
          to="https://www.linkedin.com/in/mark-witt"
          onClick={closeDrawer}
        />
        <ListItemLink
          Icon={DevIcon}
          primary="/markwitt_me"
          to="https://dev.to/markwitt_me"
          onClick={closeDrawer}
        />
      </List>
    </>
  );
  return (
    <nav className={classes.nav}>
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          {drawerContent}
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer classes={{}} variant="permanent" open>
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default MyDrawer;
