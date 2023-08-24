import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { FaYoutube, FaSourcetree } from "react-icons/fa";
import { Button } from "../styles/Button";
import "./style.css";

const ProductDetail = () => {
  const location = useLocation();
  const path = location.pathname.replace("/product/", "");
  console.log(path);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${path.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData?.meals[0]);
        setProduct(jsonData?.meals[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  const { strMealThumb, strMeal, strInstructions, strSource, strYoutube, strArea, idMeal, strCategory,} = product;
  
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Wrapper>
          {error && <h1>{error}...</h1>}
          <div className='image'>
            <img
              width='100%'
              src={strMealThumb}
              alt={strMeal}
              className='image'
            />
          </div>
          <div className='detail'>
            <p className='title'>
              #{idMeal}, <strong>{strMeal}</strong>
            </p>
            <p>
              {strCategory} <strong>{strArea}</strong>,{" "}
              {strInstructions?.substring(0, 600)}.
            </p>
            <div className='buttons'>
              <NavLink className='link' to={strYoutube}>
                <Button className='btn'>
                  <FaYoutube className='red' /> Youtube
                </Button>
              </NavLink>
              <NavLink className='link' to={strSource}>
                <Button className='btn'>
                  <FaSourcetree className='yellow' /> Source
                </Button>
              </NavLink>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  margin: 10px auto;
  max-width: 1100px;
  padding: 40px;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 50em) {
    display: block;
  }

  .image {
    max-width: 450px;
    border-radius: 2vmax;
  }

  .detail {
    display: flex;
    flex-direction: column;

    strong {
      color: blueviolet;
    }

    .title {
      align-items: start;
      font-size: 3.5rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 1.5rem;
      margin-right: 20px;
      color: #333;
      background: transparent;

      .red {
        color: red;
        font-size: 2rem;
      }

      .yellow {
        color: goldenrod;
        font-size: 2rem;
      }
    }
  }
`;

export default ProductDetail;
