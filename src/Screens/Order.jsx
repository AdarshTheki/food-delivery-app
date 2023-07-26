import { useContext } from "react";
import { AppContext } from "../context";

const Order = () => {
  const food = useContext(AppContext);
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <h1 className='title'>Random Dish to Delivery Search Result</h1>
      <div className='card-container'>
        {food?.slice(0, 10)?.map((meal, index) => {
          const { name, img, dsc, price, country, rate } = meal;
          return (
            <div className='card' key={index}>
              <div
                className='card-image'
                style={{
                  backgroundImage: `url(${img})`,
                }}>
                <span className='offers'>50% OFF up to {price}</span>
              </div>
              <div className='card-details'>
                <div className='card-name'>
                  <span className='name'>{name}</span>
                  <span className='rating'>{rate}⭐</span>
                </div>
                <div className='card-disc'>
                  <span className='disc'>
                    {name} at {dsc}
                    {name} from {country}
                  </span>
                  <div className='card_pr_loc'>
                    <span className='price'>199/-</span>
                    <span className='location'>{country.slice(0, 8)}</span>
                    <span className='location bold'>15 min</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Order;
