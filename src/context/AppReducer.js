const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        IsAuth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        LOGGED_OUT: false,
      };
    default:
      return state;
  }
};

export default AppReducer;
