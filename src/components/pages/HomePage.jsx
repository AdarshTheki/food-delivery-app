import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import TabOptions from "../common/TabOptions";
import Delivery from "./Delivery";
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";
import FilterItems from '../common/FilterItems'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTabs={activeTab} setActiveTabs={setActiveTab} />
      <FilterItems/>
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
export default HomePage;

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return (
        <div>
          <Delivery />
        </div>
      );
    case "DiningOut":
      return (
        <div>
          <DiningOut />
        </div>
      );
    case "NightLife":
      return (
        <div>
          <NightLife />
        </div>
      );
    default:
      return (
        <div>
          <Delivery />
        </div>
      );
  }
};
