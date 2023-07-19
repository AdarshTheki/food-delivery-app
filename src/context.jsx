// create context (warehouse)  => Provider  => consumer / useContext
import { createContext } from "react";
import { data } from "./data";


// create context (warehouse)
const AppContext = createContext();

// Provider
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
// And also add to main.js to wrap AppProvider

export { AppContext };
