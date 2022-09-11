import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import {useSearchParams} from 'react-router-dom';
import {productAction} from "../redux/actions/productAction"
import {useDispatch, useSelector} from "react-redux"

const ProductAll = () => {
  const productList= useSelector((state) => state.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async() =>{
    let keyword = query.get('q')||'';
    console.log("query ? ", keyword);
    dispatch(productAction.getProducts(keyword));
  };
  
  useEffect(() => {
    getProducts();
  },[query]);

  return (
    <div className='productList-menu' >
      <Container >
        <Row>
          {productList.map((item)=>(
            <Col lg={3} key={item.id}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll