// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import {Link} from 'react-router-dom';


/***************************************/
// Component for the description of activities
/***********************************/
export default function SingleActivity(props) {
  const title = props.activity.title;
  const name = title.toLowerCase().replace(/[?]/g,"").replace(/\s+/g, '-');

  return(
    <Container>
      <Link to={"/pdf?" + name}><Image src={"assets/" + name + ".png"}/></Link>
    </Container>
  )
}

// Styling
const Container = styled.div`
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  :hover{
    background-color: darkgray;
  }
`

const Image = styled.img`
  width: 300px;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 #000000;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`

const Subtitle = styled.div`

`