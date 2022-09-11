import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let {id} = useParams();
  //const [product, setProduct] = useState(null);  
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  
  const getProductDetail = async() => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
  <Container>
    <Row>
      <Col className="product-img">
        <img width={300} src={product?.img}/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
      </Col>
    </Row>
  </Container>
  );
}

export default ProductDetail