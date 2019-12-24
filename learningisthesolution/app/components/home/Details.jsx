// Package dependencies
import React from 'react';
import {Fade} from 'react-slideshow-image';
import styled from 'styled-components';


// Component dependencies
import DetailItem from './DetailItem';
import {colors} from '../../master.json';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function Details(props){ 
  const picList = pictureList.map(pic => {
    return (
      <SlideContainer>
        <PicContainer>
          <Pic src={'./assets/Detail' + pic + '.png'}/>
        </PicContainer>
      </SlideContainer>
    )
  })
  
  const itemList = detailsList.map(item => {
    return <DetailItem item={item}/>
  })
  return (
    <Container>
      <Heading>Improving your kid's behavior has never been this easy, or this fun!</Heading>
      <ContentContainer>
        <TextContainer>
          {itemList}
        </TextContainer>
        <SlideshowContainer>
          <Fade {...fadeProperties}>
            {picList}
          </Fade>
        </SlideshowContainer>
      </ContentContainer>
    </Container>
  );
}

// Constants
const pictureList = [1, 9, 3, 4, 7, 11, 2, 5, 6, 8, 10];

const fadeProperties = {
  duration: 10000,
  transitionDuration: 1000,
  arrows: false
}

const detailsList = [
  {
    label: 'Engaging',
    text: ' Characters and stories that kids love',
    icon: 'child'
  },
  {
    label: 'Easy',
    text: ' Simple to access and no prep required',
    icon: 'smile'
  },
  {
    label: 'Free',
    text: 'All current content will remain openly available',
    icon: 'money'
  },
  {
    label: 'Research-Based',
    text: ' Based on literature from child development experts',
    icon: 'smart'
  },
  {
    label: 'Community-Driven',
    text: ' Guided by feedback and request from our users',
    icon: 'shake'
  }
]

// Styling
const Container = styled.div`
  margin-top: 50px;
  padding: 20px;
  background-color: rgb(1,145,218, .1);
`

const Heading = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;
`

const ContentContainer = styled.div`
  display: flex;
`

const TextContainer = styled.ul`
  width: 50%;
  font-size: 25px;
  list-style-type: none;
  padding-right: 10px;
`

const SlideshowContainer = styled.div`
  width: 50%;
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

/*
          <Item>
            <IconContainer><Icon icon='info'/></IconContainer>
            <Text>
              <Label>Engaging</Label> - Characters and stories that kids love
            </Text>
          </Item>
          <Item>
            <IconContainer><Icon icon='info'/></IconContainer>
            <Label>Easy</Label> - Simple to access and no prep required
          </Item>
          <Item>
            <IconContainer><Icon icon='info'/></IconContainer>
            <Label>Free</Label> - All current content will remain openly available
          </Item>
          <Item>
            <IconContainer><Icon icon='info'/></IconContainer>
            <Label>Grounded</Label> - Based on literature from experts for how kids learn
          </Item>
          <Item>
            <IconContainer><Icon icon='info'/></IconContainer>
            <Label>Community-Driven</Label> - Guided by feedback and requests from our users
          </Item>
*/