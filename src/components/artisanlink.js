import React from 'react';
import { Link } from 'react-router-dom';

const Artisanlink = (props) => {
  return (
    <Link to={props.linkaddress}>
      <p>{props.linkName}</p>
    </Link>
  );
}

export default Artisanlink;
