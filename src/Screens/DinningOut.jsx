import "./DiningOut.css";
import { data } from "../data";

const DiningOut = () => {
  return (
    <>
      <div className='break'></div>

      <div className='max-width'>
        <div className='DiningOutCollections'>
          <h1 className='title'>Collection Restaurants</h1>
          <div className='icons'>
            <div className='bg-icons1 hover'>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eveniet non atque et molestiae quaerat
              </p>
            </div>
            <div className='bg-icons2 hover'>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eveniet non atque et molestiae quaerat
              </p>
            </div>
            <div className='bg-icons3 hover'>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eveniet non atque et molestiae quaerat
              </p>
            </div>
            <div className='bg-icons4 hover'>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eveniet non atque et molestiae quaerat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='break'></div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className='DiningOutRestaurant'>
          <h1 className='title'>Trending dining restaurants in Nagpur foods</h1>
          <div className='card-container'>
            {data
              ?.reverse()
              .slice(0, 12)
              ?.map((ele) => (
                <div className='card' key={ele.id}>
                  <div
                    className='card-image'
                    style={{ backgroundImage: `url(${ele?.img})` }}>
                    <span className='offers'>
                      50% OFF up to {ele.id.slice(3, 6)}0
                    </span>
                  </div>
                  <div className='card-details'>
                    <div className='card-name'>
                      <span className='name'>{ele.meal.slice(0, 18)}</span>
                      <span className='rating'>
                        {ele.id.slice(3, 5) / 10} ⭐
                      </span>
                    </div>
                    <div className='card-disc'>
                      <span className='disc'>
                        {`${ele.meal} at Lorem ipsum dolor sit ${ele.city}`}{" "}
                        {ele.meal}...
                      </span>
                      <div className='card_pr_loc'>
                        <span className='price'>{ele.id.slice(2, 6)}/-</span>
                        <span className='location'>{ele.city}</span>
                        <span className='location bold'>
                          {ele.id.slice(3, 4) + 9} min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiningOut;
