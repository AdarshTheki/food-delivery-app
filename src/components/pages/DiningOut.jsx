import "./DiningOut.css";
import { data } from "../../data";

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

      <div className='max-width'>
        <div className='DiningOutRestaurant'>
          <h1 className='title'>Trending dining restaurants in Nagpur foods</h1>
          <div className='card-container'>
            {data
              ?.sort()
              .slice(0, 15)
              ?.map((ele) => (
                <div key={ele.idMeal} className='card'>
                  <img src={ele.img} alt='' />
                  <h2>{ele.strMeal.slice(0, 20)}</h2>
                  <p>
                    {ele.strMeal +
                      "sit amet, consectetur adipisicing elit. Repudiandae" +
                      ele.strMeal}
                  </p>
                  <p>
                    <strong>Location:</strong> Nagpur
                  </p>
                  <p>
                    <span>
                      <strong>Rating:</strong> 4.2⭐{" "}
                    </span>
                    <span>
                      {" "}
                      <strong>Price:</strong> 119
                    </span>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiningOut;
