import { useContext, createContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("SORM");
  return (
    <AppContext.Provider value={{ title }}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
