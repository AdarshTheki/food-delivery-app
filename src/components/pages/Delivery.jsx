import DeliveryCollection from "./DeliveryCollection";
import DeliveryRestaurant from "./DeliveryRestaurant";

const Delivery = () => {
  return (
    <div>
      {/* Inspiration for your first order */}
      <DeliveryCollection />
      {/* Delivery Restaurants in card */}
      <DeliveryRestaurant />
    </div>
  );
};

export default Delivery;

