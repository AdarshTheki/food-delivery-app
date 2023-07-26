// create context (warehouse)  => Provider  => consumer / useContext
import { createContext } from "react";
import { food } from "./foods";


// create context (warehouse)
const AppContext = createContext();

// Provider
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={food}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
// And also add to main.js to wrap AppProvider

export { AppContext };
