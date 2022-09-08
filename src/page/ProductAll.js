import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import {useSearchParams} from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() =>{
    let keyword = query.get('q')||'';
    let url = `https://my-json-server.typicode.com/jay-brew/miniProject/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  // api 호출 : userEffect()
  // life cycle
  // 빈 값은 UI 그리고나서 최초 한 번만 실행된다.
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