import {  useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation()
  const path = location.pathname.replace("/categories/","");
  console.log(path)

  return (
    <div>
      {path}
    </div>
  )
}

export default Products
