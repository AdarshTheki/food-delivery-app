import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to={`/product/${idMeal}`}
          className='single-product-img'
          style={{
            backgroundImage: `url(${strMealThumb})`,
          }}>
          <div className='detail'>
            <h3>{strMeal?.slice(0, 30)}</h3>
            <p>Price: ${idMeal?.slice(3, 6) * 10}</p>
          </div>
        </NavLink>
      );
    };

    return (
      <>
        {isLoading ? (
          <WrapperLoading>Product Loading...</WrapperLoading>
        ) : (
          <div className='center-product'>
            <h2>{strCategory}</h2>
            <div className='product-container'>
              {products?.slice(0, 5).map((product) => (
                <SingleProduct key={product?.idMeal} {...product} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <WrapperLoading>Categories Loading...</WrapperLoading>
      ) : (
        <Wrapper>
          {categories?.map((item) => {
            return <ShowProducts key={item?.idCategory} {...item} />;
          })}
        </Wrapper>
      )}
    </>
  );
};

const WrapperLoading = styled.div`
  margin-top: 10%;
  font-size: 3rem;
  text-align: center;
`;

const Wrapper = styled.div`
  .single-product-img {
    width: 200px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border-radius: 1vmax;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
  }
  .single-product-img:hover {
    transform: scale(0.95);
  }
  .single-product-img .detail {
    position: absolute;
    bottom: 0;
    padding: 0 10px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.479);
  }
  .detail h3 {
    color: white;
    font-weight: 600;
  }
  .detail p {
    margin: 0;
    font-weight: 500;
    color: rgb(5, 236, 5);
  }

  .center-product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export default Categories;
