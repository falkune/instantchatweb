import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navlink(props){
  return(
    <Nav.Link onClick={props.onClick}>{props.value}</Nav.Link>
  );
}

export default Navlink;