import { HIDE_HEADER } from "../actions/headerAction";

// let showHeader = true;

export const headerVisible = (state = true, action) => {
  switch (action.type) {
    case HIDE_HEADER:
      return (state = false);
    default:
      return state;
  }
};
