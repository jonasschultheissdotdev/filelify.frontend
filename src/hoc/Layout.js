import React, { Fragment } from 'react';
import AppBar from '../components/appBar';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = props => {
  return (
    <Fragment>
      <AppBar isLoggedIn={props.isLoggedIn} />;
      <Container>
        <Row>
          <Col xs={10}>{props.children}</Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
