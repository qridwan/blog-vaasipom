import {
  SET_PAGE,
  SET_POSTID,
  SET_TYPE,
  SET_WRITING,
} from "../actions/dashboardAction";

let initialState = {
  page: "Writing",
  writing: null,
  type: "",
  postId: "",
};

export const dashboardState = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_WRITING:
      return {
        ...state,
        writing: action.writing,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.type,
      };

    case SET_POSTID:
      return {
        ...state,
        postId: action.postId,
      };
    default:
      return state;
  }
};
