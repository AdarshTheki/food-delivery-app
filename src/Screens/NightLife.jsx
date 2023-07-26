import { useEffect, useState } from "react";
import "./NightLife.css";

const URL_LINK = "https://www.themealdb.com/api/json/v1/1/categories.php";

const NightLife = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(URL_LINK);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
        <h1 className='title'>Inspiration for your first order</h1>
        <div className='collection-items'>
          {users?.categories?.map((data, index) => {
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
}

export default NightLife
