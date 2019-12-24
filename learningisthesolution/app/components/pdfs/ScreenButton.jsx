// Package dependencies
import React, {useState, useEffect} from  'react';
import styled from 'styled-components';

// Component dependencies
import Icon from '../common/Icon';

// Component for the controls on the pdf page
export default function ScreenButton(props){
  function handleClick(){
    props.setFull(!props.full);
  }
  
  const icon = props.full?"compress":"expand";
  const text = props.full?"Exit Full Screen":"Full Screen";
  
  return (
    <Container onClick={handleClick}>
      <Icon icon={icon}/>
      {text}
    </Container>
  )
}

const Container = styled.div`
  font-size: 25px;
  background-color: rgba(0, 0, 0, .27);
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 5px;

  :hover{
    cursor: pointer;
  }
`