import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!res.ok) {
        setLoading(true);
        return;
      }
      const data = await res.json();
      setCategories(data?.categories);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };

  const ShowProducts = ({
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  }) => {
    return (
      <Wrapper>
        <div className='img'>
          <img src={strCategoryThumb} alt='img' width='100%' />
        </div>
        <div>
          <h3>{strCategory}</h3>
          <p>{strCategoryDescription?.substring(0, 40)} ...</p>
          <br />
          <NavLink className='link' to={strCategory}>
            Get Products
          </NavLink>
        </div>
      </Wrapper>
    );
  };

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className='grid-three-column grid'>
          {categories?.map((item) => {
            return <ShowProducts key={item?.idCategory} {...item} />;
          })}
        </div>
      )}
    </>
  );
};

const Wrapper = styled.div`
  border-radius: 1vmax;
  border: 1px solid lightgray;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.2);
  }

  .img {
    width: 200px;
    img {
      border-radius: 30%;
    }
  }

  .link {
    font-size: 1.5rem;
    color: white;
    background:green;
    font-weight:600;
    padding: 4px 10px;
    border-radius:1vmax;

    &:hover{
      opacity:0.8;
    }
  }
`;

export default Categories;
