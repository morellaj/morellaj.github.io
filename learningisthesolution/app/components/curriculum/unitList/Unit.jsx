// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Data files
import {colors} from '../../../master.json';


/************************************************/
// Component for displaying an individual unit on the unit list
/************************************************/
export default function Unit(props){
  const unit = props.unit;
  const num = props.num;
  return (
    <Container  
      onClick={(e) => {props.setUnitSelected(e.target.getAttribute('value'))}} 
      value = {num}
      color = {colors[unit.unit.charAt(0)].color}
      unitSelected={props.unitSelected}>
      <div value={num}>
        {unit.title}
        {unit.ngss && <NGSS value={num} src="./assets/ngss-logo3.png"/>}
      </div>
    </Container>
    )           
}


// Styling
const Container = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 2px;
  padding: 5px;
  border-left: 10px outset ${props => props.color};
  border-radius: 1px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.unitSelected? 'white':'black'};
  background-color: ${props => props.unitSelected? props.color:'white'};

  :hover {
    background-color: ${props => props.unitSelected?props.color:'#D9D9D9'};
    cursor: pointer;
  }
`

const NGSS = styled.img`
  float: right;
  margin-left: 4px;
  width: 8px;
`