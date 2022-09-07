import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showProduct = (id) => {
      navigate(`/product/${id}`);
    };

  return (
    <div className="card" onClick={() => showProduct(item.id)}>
        <img width={300} src={item?.img}/>
        <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "신상품" : ""}</div>
    </div>
  )
}

export default ProductCard