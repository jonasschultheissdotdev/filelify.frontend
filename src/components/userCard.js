import React, { Fragment } from 'react';
import {} from 'react-bootstrap';

const userCard = props => {
  return (
    <Fragment>
      <h4>{props.username}</h4>
      <Image src={props.profilePicture} width="50" height="50" rounded />
    </Fragment>
  );
};
