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
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from '@material-ui/icons/Chat';
import Link, { GatsbyLinkProps } from "gatsby-link";

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
}));

const MyDrawer = ({ drawerOpen, setDrawerOpen }: Props) => {
  const classes = useStyles();

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const drawerContent = (
    <React.Fragment>
      <ListItem className={classes.toolbar}>
        <ListItemText primary="Navigation" />
      </ListItem>
      <Divider />
      <List className={classes.list}>
        <ListItemLink
          icon={<PersonIcon />}
          primary="About"
          to="/"
          onClick={closeDrawer}
        />
        <ListItemLink
          icon={<WorkIcon />}
          primary="Projects"
          to="/projects"
          onClick={closeDrawer}
        />
        <ListItemLink
          icon={<SchoolIcon />}
          primary="CV"
          to="/cv"
          onClick={closeDrawer}
        />
               
        <ListItemLink
          icon={<ChatIcon />}
          primary="Blog"
          to="/blog"
          onClick={closeDrawer}
        />
      </List>
    </React.Fragment>
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
interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  onClick: () => void;
}

function ListItemLink({ icon, primary, to, onClick }: ListItemLinkProps) {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "black" }}>
      <ListItem button onClick={onClick}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </Link>
  );
}

export default MyDrawer;
