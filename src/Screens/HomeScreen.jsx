import { useLocation } from "react-router-dom";
import Order from "../components/Tabs/Order";
import DinningOut from "../components/Tabs/DinningOut";
import NightLife from "../components/Tabs/NightLife";
import TabOptions from "../components/Tabs/TabOptions";

const HomeScreen = () => {
  const location = useLocation();
  const current = location.pathname.replace("/home/", "");

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
        <NightLife />
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        flexDirection:"column"
      }}>
      <TabOptions isActive={current} />
      <h1>There is no Route for this {current} 404 error!</h1>
    </div>
  );
};
export default HomeScreen;
