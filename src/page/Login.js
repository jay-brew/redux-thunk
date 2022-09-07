import React from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();

  // form 을 사용할 때 refresh 되는 것을 막아주려면 preventDefault를 사용하면 된다.
  const LoginUser = (event) => {
    console.log("hi");
    event.preventDefault();
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <Container>
      <Form onSubmit={(event) => LoginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="info" type="submit" >
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login