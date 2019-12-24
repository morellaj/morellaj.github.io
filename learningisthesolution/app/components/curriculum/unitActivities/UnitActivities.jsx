// Package dependencies
import React from 'react';
import styled from 'styled-components';


//Component dependencies and data files
import Description from './Description';
import ActivityDisplay from './ActivityDisplay';


/************************************************/
// Component for displaying the activities section
/************************************************/
export default function UnitActivities(props) {
  const unit = props.unit;
  const activities = unit.activities;
  
  let list = {};
  for (var act in activities){
    const category = activities[act].category;
    if(list[category]){
      list[category].activities.push(activities[act]);
    }
    else{
      list[category] = {
        activities: [activities[act]],
        icon: category   
      }
    }
  }
  
  for (var cat in list){
    list[cat].text = list[cat].activities.length > 1?
      iconList[cat].text + iconList[cat].multipleEnd:
      iconList[cat].text + iconList[cat].singleEnd;
  }
  
  list.parent = {
    icon: 'info',
    text: 'Parent Informational',
    extra: 'yes'
  }
  
  list.books = {
    icon: 'info',
    text: "Kid's Book Recommendations",
    extra: 'yes'
  }
  
  list.shows = {
    icon: 'info',
    text: "Kid's Show Recommendations",
    extra: 'yes'
  }

  return (
    <Container>
      <HeaderContainer>
        <Title description={unit.description}>{unit.title}</Title>
        <DescriptionContainer>
          <Description description={unit.description} cutoff={250}/>     
        </DescriptionContainer>
      </HeaderContainer>
      <ActivityDisplay iconList={list}/>  
    </Container>)
}

// Constants
const iconList = {
  pretend: {text:"Guided Pretend Activit", singleEnd: "y", multipleEnd:'ies'},
  book: {text: "Online Interactive Book", multipleEnd: 's'},
  interactive: {text: "Interactive Activit", singleEnd: "y", multipleEnd: "ies"},
  quiz: {text: "Interactive Quiz", singleEnd: "", multipleEnd: 'zes'},
  parent: {text: "parent", singleEnd: "", multipleEnd: ""}
};

// Styling
const Container = styled.div`
  margin: 0 20px;;
  width: 100%;  
  max-width: 1300px;
`

const HeaderContainer = styled.div`
  border-radius: 3px;
  color: white;
  background-color: ${props => props.theme.color};
`
  
const Title = styled.h1`
  border-bottom: ${props => props.description? '1px solid white': null};
  padding: ${props => props.description? '10px 0': '10px 0 0 0'};
  margin: 0 10px;
  font-size: 40px;
`

const TopicImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopicImage = styled.img`
  height: 300px;
`

const DescriptionContainer = styled.div`
  margin: 0;
  padding: 10px;
`