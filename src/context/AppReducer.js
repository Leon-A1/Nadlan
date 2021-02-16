const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        LOGGED_IN: true,
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
