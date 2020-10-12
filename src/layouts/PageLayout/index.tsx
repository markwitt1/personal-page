import React, { useState } from "react";
import "./index.scss";

import NavBar from "../../components/NavBar";
import {
  makeStyles,
  Fab,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import MyDrawer from "../../components/MyDrawer";
import ContactForm from "../../components/ContactForm";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
  },
  root: {
    display: "flex",
  },
  spacer: {
    backgroundColor: theme.palette.primary.light,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Layout: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const classes = useStyles();

  return (
    <div id="App">
      <NavBar setDrawerOpen={setDrawerOpen} />
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <MyDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <div className={classes.content}>{children}</div>
      </div>
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={() => {
          setFormOpen(true);
        }}
      >
        <ChatIcon />
      </Fab>
      <ContactForm open={formOpen} setOpen={setFormOpen} />
    </div>
  );
};

export default Layout;
