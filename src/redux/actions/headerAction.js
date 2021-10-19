export const SHOW_HEADER = "SHOW_HEADER";
export const HIDE_HEADER = "HIDE_HEADER";

export const showHeader = () => {
  return { type: SHOW_HEADER };
};
export const hideHeader = () => {
  return { type: HIDE_HEADER };
};
