import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'

class SignUp extends Component {
  // const [validated, setValidated] = useState(false);
  // const handleSubmit = event => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //
  //   setValidated(true);
  // };

  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
        </Form.Label>
          <Col sm={8}>
            <Form.Control required type="email" placeholder="Email" />
            <Form.Control.Feedback type="invalid">Email invlaid</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
        </Form.Label>
          <Col sm={8}>
            <Form.Control required type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password Comfirm
        </Form.Label>
          <Col sm={8}>
            <Form.Control required type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 8, offset: 2 }}>
            <Button type="submit">Sign up</Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default SignUp;
