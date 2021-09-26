import { DELETE } from "../actions/deleteAction";

export const deletePost = (state = false, action) => {
  switch (action.type) {
    case DELETE:
      return (state = true);
    default:
      return state;
  }
};
