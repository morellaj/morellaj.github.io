// Package dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Component dependencies
import {colors} from '../../master.json';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function TryButton(props){ 
  return (
    <Container to="pdf?the-furbots">READ A BOOK</Container>
  );
}

// Constants
const Container = styled(Link)`
  background-color: ${colors.LITS.color};
  border-radius: 40px;
  box-shadow: 0 0 20px 2px #000000;
  font-size: 40px;
  color: white;
  padding: 5px 20px;
  bottom: 10px;
  font-weight: 900;
  text-decoration:none;

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`