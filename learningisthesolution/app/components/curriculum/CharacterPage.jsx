// Package dependencies
import React, {useState, useEffect, Fragment} from 'react';
import styled, {ThemeProvider} from 'styled-components';


// Component dependencies and data files
import UnitList from './unitList/UnitList';
import UnitActivities from './unitActivities/UnitActivities';
import Navbar from '../common/Navbar';
import UnitArr from './UnitArr';
import {colors, character} from '../../master.json';


/************************************************/
// Component for displaying the science page
/************************************************/
export default function CharacterPage(props) {
  const [unitSelected, setUnitSelected] = useState(0);
  const [done, setDone] = useState(false);
  let location = props.location.search.slice(1, );
  let locationUnit = unitNumbers.indexOf(location) != -1?unitNumbers.indexOf(location):unitSelected;
  history.pushState({id: unitNumbers[unitSelected]}, 'Stuff', 'https://learningisthesolution.glitch.me/activities?' + unitNumbers[unitSelected]);
  if(locationUnit != unitSelected && !done){
    setUnitSelected(locationUnit);
    setDone(true);
  }
  var unitArr = UnitArr(character);
  const colorTheme = unitArr.length? colors[unitArr[unitSelected].unit.charAt(0)]:null;
  const theme = colorTheme?{
    color: colorTheme.color,
    darkColor: colorTheme.darkColor,
    lightColor: colorTheme.lightColor,
    litsColor: colors.LITS.color
  }:{};
  
  const unitName = unitArr[unitSelected].unit;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Fragment>
      <Navbar/>
      <ThemeProvider theme={theme}>
        <Container>
          <UnitList 
            unitList={unitArr}  
            unitSelected={unitSelected} 
            setUnitSelected={setUnitSelected} 
            curriculum='character'/>
          <UnitActivities unit={character[unitName]} unitName={unitName}/>
        </Container>
      </ThemeProvider>
    </Fragment>
  )
}




// Constants
const unitNumbers = [ "hurting-others", "critical-thinking", "honesty" ]


// Styling
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px 0 0 0;
  padding-bottom: 50px;
`
