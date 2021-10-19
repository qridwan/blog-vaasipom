import {
  //   DELETE_POST,
  FETCH_ALL_POST,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
} from "../actions/landingPage.Action";

const initialState = {
  posts: [],
  backup: [],
};

export const LandingPageState = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return {
        ...state,
      };

    case FETCH_POST_SUCCESS:
      const allPost = action.posts;
      return {
        ...state,
        posts: [...allPost],
        fetch: true,
      };

    case FETCH_POST_FAILURE:
      return {
        ...state,
      };

    //   case DELETE_POST:
    //   const id = action.id;
    // const remainingFav = state.favorites.filter((item) => item.favId !== action.id);
    // return {
    //   ...state,
    //   favorites: remainingFav,
    // };
    default:
      return state;
  }
};
