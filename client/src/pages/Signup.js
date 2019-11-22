import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup(props) {
  return (
    <div>
    <h1>SIGN UP</h1>
    <Form>

<Form.Group>
<Form.Control type="text" placeholder="First name:" />
<Form.Control type="text" placeholder="Last name:" />
</Form.Group>

  <Form.Group controlId="formBasicEmail">

    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  );
}

export default Signup;
