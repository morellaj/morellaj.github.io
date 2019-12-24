// Package dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Component dependencies
import Topic from './Topic';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function TopicsDisplay(props){ 
  let i = 0;
  const list = topicList.map(topic => {
    i++;
    if(topic.status == "Available"){
      return (
        <Link to={"/activities?" + topic.text.replace(/\s+/g, '-').toLowerCase()} key={i}>
          <Topic topic={topic}/>
        </Link>
    )}
    else {
      return <Topic topic={topic} key={i}/>
    }
  })
  
  return (
    <Container>
      <DisplayContainer>
        {list}
      </DisplayContainer>
    </Container>
  );
}

// Constants
const topicList = [
  {
    text: 'Hurting Others',
    status: "Available"
  },
  {
    text: 'Critical Thinking',
    status: "Available"
  },
  {
    text: 'Honesty',
    status: "Available"
  },
  {
    text: 'Thinking for Yourself',
    status: "In Development"
  },
  {
    text: 'Anger',
    status: "In Development"
  },
  {
    text: 'Sharing',
    status: "In Development"
  },
  {
    text: 'Gratitude',
    status: "In Development"
  },
  {
    text: 'Caring',
    status: "In Development"
  },
  {
    text: 'Making the World a Better Place',
    status: "In Development"
  },
  {
    text: 'Diversity',
    status: "In Development"
  }
]

// Styling

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
  justify-content: center;
`