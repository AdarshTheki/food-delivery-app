import "./DeliveryRestaurant.css";
import {AppContext} from '../../context'
import { useContext } from "react";

const DeliveryRestaurant = () => {

  const Data = useContext(AppContext)

  console.log(Data[0].id)
  
  return (
    <div className='max-width'>
      <h1 className="title">Random Dish to Delivered with Restaurant</h1>
      <div className='card-container'>
        {Data?.slice(20, 32)?.sort()?.map((data) => {
          const { id, category, meal, img, rating , city } = data;
          return (
            <div className='card' key={id}>
              <img src={img} alt={"img_" + id} title={meal} />
              <div className='cart-title'>
                <h2>{meal.slice(0, 20)}</h2>
                <p>
                  {meal} of category is {category} amet consectetur adipisicing
                  elit. Reiciendis at <strong>{city}</strong> city.
                </p>
              </div>
              <div className='cart-detail'>
                <p>
                  <strong>category:</strong> {category}
                </p>
                <p>
                  <strong>Rating:</strong> {rating}⭐
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DeliveryRestaurant;
