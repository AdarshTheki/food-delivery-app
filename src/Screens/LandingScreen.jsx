import { NavLink } from "react-router-dom";
import bgPic from "../assets/landing_bg_img.avif";
import order_pic from "../assets/order_pic.avif";
import dinning_pic from "../assets/dinning_pic.avif";
import nightlife_pic from "../assets/nightlife_pic.avif";

const MenuData = [
  {
    id: 1,
    img: order_pic,
    name: "Order Online",
    description: "Stay home and order to your doorstep",
    link: "order",
  },
  {
    id: 2,
    img: dinning_pic,
    name: "Dinning",
    description: "View the cities favorite dining venues",
    link: "dining",
  },
  {
    id: 3,
    img: nightlife_pic,
    name: "NightLife",
    description: "Explore the city’s top nightlife outlets",
    link: "nightlife",
  },
];

const LandingScreen = () => {
  return (
    <div className='bg-logo' style={{ backgroundImage: `url(${bgPic})` }}>
      <h1>Discover the best food & drinks in Nagpur</h1>
      <div className='menu-container'>
        {MenuData?.map((menu) => (
          <NavLink key={menu.id} className='menu' to={`home/${menu.link}`}>
            <img src={menu.img} alt={menu.name} />
            <h2>{menu.name}</h2>
            <p>{menu.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LandingScreen;
