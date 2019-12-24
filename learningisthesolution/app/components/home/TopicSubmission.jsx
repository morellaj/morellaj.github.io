// Package dependencies
import React, {Fragment} from 'react';
import styled from 'styled-components';

//Component dependencies
import {colors} from '../../master.json';


/************************************************/
// Component for displaying the home page
/************************************************/
export default function TopicSubmission(props){ 
  return (
    <Container>
      <FormContainer>
        <TextContainer>
          <Line>Interested in a topic that isn't available yet or isn't even listed?  Vote for it below!</Line>
          <Explanation>These votes will help decide which topics are prioritized next.</Explanation>
        </TextContainer>
        <InputForm method="GET" action="/submit-form">
          <InputText type="text" placeholder="Vote for a topic!" required/>
          <InputButton type="submit">Vote</InputButton>
        </InputForm>
      </FormContainer>
    </Container>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const FormContainer = styled.div`

`

const TextContainer = styled.div`

`

const Line = styled.div`
  font-weight: 700;
  font-size: 30px;
`

const Explanation = styled.div`
  margin-bottom: 10px;
`
const InputForm = styled.form`
  display: flex;
  justify-content: center;
`

const InputText = styled.input`
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 20px;
  margin-right: 20px;
`

const InputButton = styled.button`
  background-color: ${colors.LITS.color};
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`