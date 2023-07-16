import "./FilterItems.css";

const deliveryFilter = [
  {
    id: 1,
    icon: <i className='fi fi-br-settings-sliders'></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating 4.8⭐",
  },
  {
    id: 3,
    icon: <i className='fi fi-br-angle-small-down'></i>,
    title: "Cuisines",
  },
];

const FilterItems = () => {
  return (
    <div className='max-width'>
      <div className='filterItems'>
        {deliveryFilter.map((filter) => (
          <div key={filter.id} className='filter-name cur-po absolute-center'>
            {filter.icon}
            {filter.title} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterItems;
