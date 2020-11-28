import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// first argument is the state, here posts because we're in a posts file
// state must ALWAYS be equal to something

const reducer = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
