import { createContext, useState } from "react";

const initState = {
  user: null,
  token: null,
};
export const GlobalContext = createContext(initState);

export const GlobalContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const globalContextValue = {
    user,
    token,
    updateUser: setUser,
    updateToken: setToken,
  };
  return (
    <GlobalContext.Provider value={globalContextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
