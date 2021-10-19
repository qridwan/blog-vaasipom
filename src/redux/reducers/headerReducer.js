import { HIDE_HEADER, SHOW_HEADER } from "../actions/headerAction";

// let showHeader = true;

export const headerVisible = (state = true, action) => {
  switch (action.type) {
    case HIDE_HEADER:
      return (state = false);
      case SHOW_HEADER:
      return (state = true);
    default:
      return state;
  }
};
