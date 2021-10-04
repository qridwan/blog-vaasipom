import {
  SET_PAGE,
  SET_POSTID,
  SET_SHOW_TOPICS,
  SET_TODO,
  SET_WRITING,
} from "../actions/dashboardAction";

let initialState = {
  page: "",
  writing: null,
  todo: {
    edit: false,
  },
  postId: "",
  showTopics: true,
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
    case SET_TODO:
      return {
        ...state,
        todo: action.todo,
      };

    case SET_POSTID:
      return {
        ...state,
        postId: action.postId,
      };
    case SET_SHOW_TOPICS:
      return {
        ...state,
        showTopics: action.showTopics,
      };
    default:
      return state;
  }
};
