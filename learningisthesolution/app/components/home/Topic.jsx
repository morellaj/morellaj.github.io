// Package dependencies
import React from 'react';
import styled from 'styled-components';


/************************************************/
// Component for displaying the home page
/************************************************/
export default function Topic(props){ 
  const unit = props.topic.text.replace(/\s+/g, '-').toLowerCase();
  return (
    <Container>
      <Image src={"./assets/" + unit + "1.jpg"}/>
      <TextContainer>
        <Title>{props.topic.text}</Title>
        <Status status={props.topic.status}>{props.topic.status}</Status>
      </TextContainer>
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 30px 20px;
  box-shadow: 0 0 20px 0 #000000;
  border-radius: 20px;
  align-items: center;
  background-color:white;
`

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  border-radius: 20px;
`

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid black;
  padding: 10px;
  border-radius: 20px;
`
        
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  color: black;
`

const Status = styled.div`
  font-weight: 700;
  color: ${props => props.status == 'Available'? 'green': 'darkslategray'}
`