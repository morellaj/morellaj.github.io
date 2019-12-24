// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Component dependencies
import Icon from '../common/Icon';
import {colors} from '../../master.json';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function DetailItem(props){ 
  return (
    <Container>
      <IconContainer>
        <Icon icon={props.item.icon}/>
      </IconContainer>
      <TextContainer>
        <Label>{props.item.label}</Label> &mdash; 
        {props.item.text}
      </TextContainer>
    </Container>
  );
}

// Styling
const Container = styled.li`
  margin-bottom: 25px;
  display: flex;
`

const IconContainer = styled.div`
  display: flex;
  width: 31.25px;
  justify-content: center;
  color: ${colors.LITS.color};
`

const TextContainer = styled.div`
  margin-left: 10px;
`

const Label = styled.span`
  font-weight: 900;

`

