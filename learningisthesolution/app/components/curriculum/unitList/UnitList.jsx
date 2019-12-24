// Package dependencies
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {colors} from '../../../master.json';


// Component dependencies
import Unit from './Unit.jsx';
import Legend from './Legend.jsx';


/************************************************/
// Component for displaying the unit list on curriculum pages
/************************************************/
export default function UnitList(props) {
  let i = -1;
  const unitArr = props.unitList.map(unit => {
    i++;
    return <Unit 
      unitSelected={props.unitSelected == i}
      num={i}
      unit={unit}
      setUnitSelected={props.setUnitSelected} 
      setTab={props.setTab}
      key={i}/>
  });
  
  return (
    <Container>
      <Legend/>
      {unitArr}    
    </Container>)
}


// Styling
const Container = styled.div`
  width: 200px;
  margin: 0 20px;
`