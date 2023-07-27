import { useLocation } from "react-router-dom";
import Order from "../components/Tabs/Order";
import DinningOut from "../components/Tabs/DinningOut";
import NightLife from "../components/Tabs/NightLife";
import TabOptions from "../components/Tabs/TabOptions";

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
