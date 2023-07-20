import "./DeliveryRestaurant.css";
import { AppContext } from "../../context";
import { useContext } from "react";

const DeliveryRestaurant = () => {
  const Data = useContext(AppContext);

  console.log(Data[0].id);

  return (
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <h1 className='title'>Random Dish to Delivered with Restaurant</h1>
      <div className='card-container'>
        {Data?.slice(20, 32)
          ?.sort()
          ?.map((data) => {
            const { id, meal, img, city } = data;
            return (
              <div className='card' key={id}>
                <div
                  className='card-image'
                  style={{ backgroundImage: `url(${img})` }}>
                  <span className='offers'>50% OFF up to {id.slice(3,6)}0</span>
                </div>
                <div className='card-details'>
                  <div className='card-name'>
                    <span className='name'>{meal.slice(0, 18)}</span>
                    <span className='rating'>{id.slice(3, 5) / 10} ⭐</span>
                  </div>
                  <div className='card-disc'>
                    <span className='disc'>
                      {`${meal} at Lorem ipsum dolor sit ${city}`} {meal}...
                    </span>
                    <div className='card_pr_loc'>
                      <span className='price'>{id.slice(2, 6)}/-</span>
                      <span className='location'>{city}</span>
                      <span className='location bold'>
                        {id.slice(3, 4) + 9} min
                      </span>
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
export default DeliveryRestaurant;
