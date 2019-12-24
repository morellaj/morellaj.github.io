// Package dependencies
import React, {Fragment} from 'react';
import styled from 'styled-components';


// Component dependencies
import Navbar from '../common/Navbar';
import IntroPictures from './IntroPictures';
import TopicsDisplay from './TopicsDisplay';
import Details from './Details';
import TryButton from'./TryButton';
import Footer from '../common/Footer';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function Home(props){ 
  return (
    <Fragment>
      <Navbar />
      <Container>
        <IntroPictures/>
        <SectionLabel>CURRENT TOPICS</SectionLabel>
        <TopicsDisplay/>
        <Details/>
        <TryContainer>
          <TryButton/>
        </TryContainer>
        <Footer/>
      </Container>
    </Fragment>
  );
}


// Styling
const Container = styled.div`
 
`

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
`

const SectionLabel = styled.div`
  display: flex;
  justify-content: center;
  margin: 70px 0 40px 0;
  font-size: 30px;
  font-weight: 700;
  text-decoration: underline;
  color: dimgray;
`

const TryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`