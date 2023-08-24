import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import './cate.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
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

  const ShowProducts = ({ idCategory, strCategory }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
          );
          if (!res.ok) {
            setIsLoading(true);
            return;
          }
          const data = await res.json();
          setProducts(data?.meals);
          // console.log(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
          setIsLoading(true);
        }
      };
      fetchProducts();
    }, [strCategory]);

    const SingleProduct = ({ idMeal, strMeal, strMealThumb }) => {
      return (
        <div
          className='single-product'
          style={{
            backgroundImage: `url(${strMealThumb})`,
            width: 200,
            height: 200,
          }}>
          <div className='detail'>
            <h3>{strMeal?.slice(0, 20)}</h3>
            <p>Price: ${idMeal?.slice(3, 6) * 10}</p>
          </div>
        </div>
      );
    };

    return (
      <>
        {isLoading ? (
          <h2>Loading is here...</h2>
        ) : (
          <div className="center-product">
            <h2>{strCategory}</h2>
            <div className="product-container">
              {products?.slice(0,5).map((product) => (
                <SingleProduct key={product?.idMeal} {...product} />
              ))}
            </div>
          </div>
        )}
      </>
      // <Wrapper>
      //   <div className='img'>
      //     <img src={strCategoryThumb} alt='img' width='100%' />
      //   </div>
      //   <div>
      //     <h3>{strCategory}</h3>
      //     <p>{strCategoryDescription?.substring(0, 40)} ...</p>
      //     <br />
      //     <NavLink className='link' to={strCategory}>
      //       Get Products
      //     </NavLink>
      //   </div>
      // </Wrapper>
    );
  };

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
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
  flex-wrap:wrap;
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
    background: green;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 1vmax;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Categories;
