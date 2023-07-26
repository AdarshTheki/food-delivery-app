import { useRef, useState } from "react";
import "./FilterItems.css";
import Authenticated from "./Authenticated";

const Filters = ["Beef", "Chicken", "Dessert", "Vegan", "Breakfast", "Goat"];
// const category = ["Filter", "Rating", "Cuisines"];
// const Ratings = ["bad", "good", "better", "best", "Excellent"];
// const Cuisines = ["breakfast", "lunch", "dinner", "fastFood"];

const FilterItems = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const btnRef = useRef();
  const filterHandler = () => {
    setOpen(!open);
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== btnRef.current) {
        setOpen(false);
      }
    });
  };
  return (
    <div className='max-width'>
      <div className='filterItems'>
        <div>
          <button className='btn' onClick={filterHandler} ref={btnRef}>
            Food filter
          </button>
          {open && (
            <div className='menu' ref={menuRef}>
              <h3>Food filter option</h3>
              <ul className='menu-list'>
                {Filters.map((ele) => (
                  <li key={ele} onClick={() => setOpen(false)}>
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Authenticated />
      </div>
    </div>
  );
};
export default FilterItems;
