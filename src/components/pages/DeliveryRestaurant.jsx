import "./DeliveryRestaurant.css";
import { AppContext } from "../../context";
import { useContext } from "react";

const DeliveryRestaurant = () => {
  const data = useContext(AppContext);
  console.log(data)
  return (
    <div className='max-width'>
      <h1 className="title">Random Dish to Delivered with Restaurant</h1>
      <div className='card-container'>
        {data?.categories?.slice(0, 12).map((data) => {
          const { idCategory, strCategory, strCategoryThumb } = data;
          return (
            <div className='card' key={idCategory}>
              <img
                src={strCategoryThumb}
                alt={"strCategoryThumb_" + idCategory}
              />
              <div className='cart-title'>
                <h2>{strCategory}</h2>
                <p>
                  {strCategory} amet consectetur adipisicing elit. Reiciendis at
                  sequi esse rerum odit {strCategory}
                </p>
              </div>
              <div className='cart-detail'>
                <p><strong>strCategory:</strong> {strCategory}</p>
                <p><strong>Rating:</strong> 4.0⭐</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DeliveryRestaurant;
