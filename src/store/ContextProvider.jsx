import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const context = createContext();

export const useState = () => useContext(context);

export const ContextProvider = ({ children, loglevel, initialState }) => {
  const [state, dispatch] = useReducer(reducer({ loglevel }), initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
