// Package dependencies
import React, {useState, useEffect} from 'react';
import {Fade} from 'react-slideshow-image';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Component dependencies
import Icon from '../common/Icon';
import TryButton from'./TryButton';
import {colors} from '../../master.json';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function IntroParagraph(props){ 
  const picList = pictureList.map(pic => {
    return (
      <SlideContainer>
        <PicContainer>
          <Pic src={'./assets/Home' + pic + '.png'}/>
        </PicContainer>
      </SlideContainer>
    )
  })
  
  return (
    <Container>
      <IntroTextContainer>
        <Pic src='./assets/HomeText.png'/>
        <TryButtonContainer>
          <TryButton/>
        </TryButtonContainer>
      </IntroTextContainer>
      <Fade {...fadeProperties}>
        {picList}
      </Fade>
    </Container>
  );
}

// Constants
const pictureList = [8, 34, 39, 12, 10, 21, 27, 5, 20, 18, 22, 31];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  arrows: false
}

// Styling
const Container = styled.div`
  background-color: rgba(0, 0, 0, .2);
`

const IntroTextContainer = styled.div`
  position:absolute;
  z-index: 3;
  overflow: hidden;
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
`

const PicContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Pic = styled.img`
  width: 100%;
  max-width: 1100px;
`

const SlideContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TryButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
`