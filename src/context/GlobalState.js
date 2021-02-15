import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  // #### PRODUCTION #####
  API_URL: "https://nadlan-server.herokuapp.com/api/",
  FILE_STORAGE_URL: "https://nadlan-server.herokuapp.com/file",
  // #### DEVELOPMENT #####
  // API_URL: "http://localhost:5000/api/",
  // FILE_STORAGE_URL: "http://localhost:5000/file",
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, action] = useReducer(AppReducer, initialState);
  console.log(action);

  return (
    <GlobalContext.Provider
      value={{
        API_URL: state.API_URL,
        FILE_STORAGE_URL: state.FILE_STORAGE_URL,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
