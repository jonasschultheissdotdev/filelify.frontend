import React, { Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import logo from '../logo.png';

const appBar = props => {
  const buttons = (
    <ButtonGroup>
      <Button to="/sign_up" variant="outline-light" onClick={() => this.props.history.push('/sign_up')}>
        Sign Up
      </Button>
      <Button to="/sign_in" variant="outline-light" onClick={() => this.props.history.push('/sign_in')}>
        Sign In
      </Button>
    </ButtonGroup>
  );

  const userCard = <userCard token={props.token} />;

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img alt="Logo" src={logo} width="50" height="50" className="d-inline-block align-top" /> <h5>Filelify</h5>
        </Navbar.Brand>
        {props.token ? userCard : buttons}
      </Navbar>
    </Fragment>
  );
};

export default appBar;
