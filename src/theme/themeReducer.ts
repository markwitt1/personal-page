export interface ThemeState {
  darkMode: boolean;
}
export type Action = { type: "TOGGLE_DARKMODE" };

export const initialState = {
  darkMode:
    localStorage.getItem("darkMode") === "true" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    false,
};

console.log(initialState);

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      localStorage.setItem("darkMode", (!state.darkMode).toString());
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      throw new Error(`Unrecognized type ${action.type}`);
  }
};
