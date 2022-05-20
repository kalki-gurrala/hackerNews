import { createContext } from "react";

const initialState = {
  searchTerm: "",
};
const AppContext = createContext(initialState);
const StateProvider = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, StateProvider, initialState };
