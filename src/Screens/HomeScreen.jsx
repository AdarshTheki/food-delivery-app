import Order from "./Order";
import DinningOut from "./DinningOut";
import NightLife from "./NightLife.jsx";
import { useLocation } from "react-router-dom";
import TabOptions from "./TabOptions";

const HomeScreen = () => {
  const location = useLocation();
  console.log("HomeScreen:", location);

  const current = location.pathname.replace("/home/", "");
  console.log(current);

  if (current === "order") {
    return (
      <>
        <TabOptions isActive={current} />
        <Order />
      </>
    );
  }
  if (current === "dining") {
    return (
      <>
        <TabOptions isActive={current} />
        <DinningOut />
      </>
    );
  }
  if (current === "nightlife") {
    return (
      <>
        <TabOptions isActive={current} />
        <NightLife/>
      </>
    );
  }

  return (
    <>
      <TabOptions isActive={current} />
      <h1>Hello of word 404!</h1>
    </>
  );
};
export default HomeScreen;
