// Package dependencies
import React, {useState} from 'react';
import styled from 'styled-components';


// Data files
import {colors} from '../../../master.json';


/************************************************/
// Component for displaying an individual unit on the unit list
/************************************************/
export default function Legend(props){
  
  return (
    <Container>
      <LabelContainer>
        Topic List
      </LabelContainer>  
    </Container>
    )           
}


// Styling
const Container = styled.div`
  color: black;
`

const LabelContainer = styled.div`
  padding: 6px;
  margin: 2px 0;
  background-color: ${colors.LITS.color};
  color: white;

  :hover{
    background-color: ${colors.LITS.darkColor};
    cursor: pointer;
  }
`