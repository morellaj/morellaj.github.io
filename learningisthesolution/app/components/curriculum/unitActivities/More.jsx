// Package dependencies
import React from 'react';
import styled from 'styled-components';


/***************************************/
// Component for allowing descriptions to expand or close
/***********************************/
export default function More(props) {
  const text = props.more? '  Less':'...  More';
  return(
  <MoreSpan onClick={() => props.setMore(!props.more)}>
    {text}
  </MoreSpan>
  )
}


// Styling
const MoreSpan = styled.span`
  font-weight: 600;

  :hover{
    cursor: pointer;
  }
`