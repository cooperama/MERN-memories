import * as api from "../api";

// Action Creators - functions that return actions
// actions are objects that have a type and a payload
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // instead of return the action, you have to dispatch it
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};
