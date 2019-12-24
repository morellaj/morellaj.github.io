// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import SingleActivity from './SingleActivity';
import Icon from '../../common/Icon';


/***************************************/
// Component for the description of activities
/***********************************/
export default function ActivityDisplay(props) {
  const list = props.iconList;
  let display = [];
  
  for (var cat in list){
    var item = list[cat];
    if(!item.extra){
      let activities = [];
      for (var act in item.activities){
        activities.push(
          <SingleActivity activity={item.activities[act]} key={act}/>
        )
      }
      display.push(
        <ActivityGroup>
          <GroupHeader>
            <Icon icon={list[cat].icon}/>
            <Label>{list[cat].text}</Label>
          </GroupHeader>
          <Activities>{activities}</Activities>
        </ActivityGroup>
      )
    }
  }


  return(
    <Container>
      {display}
    </Container>
  )
}

// Styling
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ActivityGroup = styled.div`
  background-color: white;
  margin: 20px 0;
  border-radius: 5px;
`

const GroupHeader = styled.div`
  display: flex;
  margin: 10px;
  font-size: 36px;
  border-bottom: 1px solid ${props => props.theme.color}
`

const Label = styled.div`

`

const Activities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`