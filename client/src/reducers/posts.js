// first argument is the state, here posts because we're in a posts file
// state must ALWAYS be equal to something
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
