import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const signIn = props => {
  const form = (
    <Form>
      <Form.Group controlId="usernameForm">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="passwordForm">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="dark" type="">
        Sign in
      </Button>
    </Form>
  );

  return form;
};

export default signIn;

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  };
}
