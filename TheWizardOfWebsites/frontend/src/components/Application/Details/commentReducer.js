const reducer = (state, action) => {
    switch (action?.type) {
      case "GET_ALL_COMMENTS":
        return [...action.resultComments];
      case "ADD_COMMENT":
        return [...state, action.resultComments];
      case "EDIT_COMMENT":
        return state.map(c => c._id === action.resultComments._id ? {...c, text: action.resultComments.text}: c);
      default:
        return state;
    }
  };
  export default reducer