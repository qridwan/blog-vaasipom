import axios from "axios";
import { BaseUrl } from "../../BaseUrl.config";

export const DELETE_POST = "DELETE_POST";
export const FETCH_ALL_POST = "FETCH_ALL_POST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";

// const headers = {
//   Authorization: sessionStorage.getItem("token"),
  // "Access-Control-Allow-Origin": "*",
  // "content-type": "application/json",
// };

export const fetchPost = (categoryItem, page) => {
  return (dispatch) => {
    dispatch(fetchAllPost());
    return axios
      .get(
        BaseUrl +
          `/auth/home/posts?categoryList=${categoryItem}&page=${page}&allPost=true`
      )
      .then((res) => {
        dispatch(fetchPostSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(fetchPostFailure(error)));
  };
};

// export const deletePost = (category, id, enqueueSnackbar) => {
//   return (dispatch) => {
//     dispatch(fetchAllPost());
//     return axios
//       .delete(BaseUrl + `/${category}?${category}Id=${id}`, { headers })
//       .then(() => {
//         enqueueSnackbar(`${category} deleted`, { variant: "success" });
//         dispatch(fetchAllPost());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// Handle HTTP errors since fetch won't.
// const handleErrors = (response) => {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// };

export const fetchAllPost = () => ({
  type: FETCH_ALL_POST,
});

export const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  posts: posts,
});

export const fetchPostFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload: { error },
});

// export const deletePostSuccess = () => ({
//     // type: DELETE_POST_SUCCESS,

// })
// export const addToFav =( id, img, name, price)=> {
//     return ( {type: ADD_TO_FAV,
//     id,  price, name, img})
// }

// export const deletePost = () => {
//   return { type: DELETE_POST };
// };

// export const setSearch = search => {
//   return ( {type: SET_SEARCH, payload:search})
// }

// export const fetchSearch = () => {
//   return ( {type: FETCH_SEARCH})
// }
