import React from "react";

import { Action } from "./themeReducer";

export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {
    throw new Error("Forgot to wrap component in `ThemeProvider`");
  }
);

export function useToggleDarkMode() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(() => dispatch({ type: "TOGGLE_DARKMODE" }), [
    dispatch,
  ]);
}
