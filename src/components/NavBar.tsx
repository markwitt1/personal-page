import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import DarkModeButton from "./DarkModeButton";
interface Props {
  setDrawerOpen: (value: boolean) => void;
}
const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  active: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      zIndex: 1400,
    },
  },
  darkToggle: {
    float: "right",
  },
  navText: {
    flexGrow: 1,
  },
}));

const NavBar = ({ setDrawerOpen }: Props) => {
  //const location = useLocation().pathname;
  const classes = useStyles();

  const title = "Mark Witt";
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.navText} variant="h6">
          {title}
        </Typography>
        <DarkModeButton />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
