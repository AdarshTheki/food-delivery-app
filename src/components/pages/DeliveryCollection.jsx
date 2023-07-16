import "./DeliveryCollection.css";
import { useContext } from "react";
import { AppContext } from "../../context";

const DeliveryCollection = () => {
  // use Data with context API
  const contextData = useContext(AppContext);

  // Note: Slider Button with left right arrows
  let box = document.querySelector(".collection-items");
  const btnPressPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width + 370;
  };
  const btnPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width - 370;
  };
  
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <h1 className='collection-title'>Inspiration for your first order</h1>
        <div className='collection-items'>
          {contextData?.categories?.map((data, index) => {
            // get data into the container
            const { idCategory, strCategoryThumb, strCategory } = data;
            return (
              <div key={idCategory} className='collection-container'>
                <div className='collection-image'>
                  <img src={strCategoryThumb} alt={strCategory} />
                </div>
                <h1>{strCategory}</h1>
                <span>{index + 1}</span>
              </div>
            );
          })}
        </div>
        {/* Fixed Arrows with Left Right */}
        <div className='collection-arrows'>
          <button className='left-btn' onClick={btnPressPrev}>
            <i className='fa-solid fa-chevron-left'></i>
          </button>
          <button className='right-btn' onClick={btnPressNext}>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCollection;





  // // Note: Get Data with the help of Axios and Error handle
  // const [getData, setData] = useState([]);
  // const [isError, setIsError] = useState("");

  // // Note: Using Async Await
  // const getApiData = async () => {
  //   try {
  //     const res = await contextData
  //     setData(res.categories);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };
  // // Note: One Time Data Get
  // useEffect(() => {
  //   getApiData();
  // }, []);
