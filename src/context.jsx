// create context (warehouse)  => Provider  => consumer / useContext
import { createContext, useEffect, useState } from "react";
import Axios from "./axios";

// create context (warehouse)
const AppContext = createContext();

// Provider
const AppProvider = ({ children }) => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    Axios.get("/categories.php")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }, []);
  return <AppContext.Provider value={getData}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
// And also add to main.js to wrap AppProvider
