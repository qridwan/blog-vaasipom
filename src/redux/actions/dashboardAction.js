export const SET_PAGE = "SET_PAGE";
export const SET_WRITING = "SET_WRITING";
export const SET_TYPE = "SET_TYPE";
export const SET_POSTID = "SET_POSTID";

export const setPage = (pageName) => {
  return { type: SET_PAGE, page: pageName };
};

export const setWriting = (write) => {
  return { type: SET_WRITING, writing: write };
};

export const setType = (typ) => {
  return { type: SET_TYPE, typ };
};

export const setPostId = (id) => {
  return { type: SET_POSTID, postId: id };
};
