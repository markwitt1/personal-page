import React from "react";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import { useToggleDarkMode } from "../DispatchContext";
import { Brightness4, Brightness7 } from "@material-ui/icons";

function DarkModeButton(props) {
  const paletteType = useTheme().palette.type;
  const _toggleDarkMode = useToggleDarkMode();

  return (
    <IconButton onClick={_toggleDarkMode} {...props}>
      {paletteType === "dark" ? (
        <Brightness4 htmlColor="white" />
      ) : (
        <Brightness7 htmlColor="white" />
      )}
    </IconButton>
  );
}

export default DarkModeButton;
