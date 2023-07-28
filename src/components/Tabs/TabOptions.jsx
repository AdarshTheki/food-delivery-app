import { useState } from "react";
import { NavLink } from "react-router-dom";

const TabOptions = ({ isActive }) => {
  const [activeTabs, setActiveTabs] = useState(isActive)
  const tabs = [
    {
      id: 1,
      name: "order",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
      backdrop: "#fceec0",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 2,
      name: "dining",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: "#fceec0",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 3,
      name: "nightlife",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "#fceec0",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];

  return (
    <div className='tabOption'>
      <div className='max-width tabOption-wrapper'>
        {tabs.map((tab) => (
          <NavLink
            to={`/home/${tab.name}`}
            replace
            key={tab.id}
            onClick={() => setActiveTabs(tab.name)}
            className={`tabOption-item absolute-center cur-po ${
              activeTabs === tab.name && "active-tab bottom-border"
            }`}>
            <div
              className='tabOption-image absolute-center'
              style={{
                background: `${activeTabs === tab.name ? tab.backdrop : ""}`,
              }}>
              <img
                src={
                  activeTabs === tab.name ? tab.active_img : tab.inactive_img
                }
                alt={tab.name}
              />
            </div>
            <div className='tabOption-name color'>{tab.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
