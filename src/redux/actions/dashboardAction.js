export const SET_PAGE = "SET_PAGE";
export const SET_WRITING = "SET_WRITING";
export const SET_TODO = "SET_TODO";
export const SET_POSTID = "SET_POSTID";
export const SET_SHOW_TOPICS = "SET_SHOW_TOPICS";

export const setPage = (pageName) => {
  return { type: SET_PAGE, page: pageName };
};

export const setWriting = (write) => {
  return { type: SET_WRITING, writing: write };
};

export const setTodo = (todo) => {
  return { type: SET_TODO, todo: todo };
};

export const setPostId = (id) => {
  return { type: SET_POSTID, postId: id };
};

export const setShowTopics = (boolean) => {
  return { type: SET_SHOW_TOPICS, showTopics: boolean };
};
