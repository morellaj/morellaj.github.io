// Package dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


// Component dependencies and data files
import {colors} from '../../master.json';


// Component for displaying the navbar on pages
export default function Footer() {
  const items = dropdownList.map(unit => {
    return (
      <FooterItem key={unit.id}>
        <Link to={unit.link} style={{color:'inherit', textDecoration:'none'}}>
          <div>{unit.title}</div>
        </Link>
      </FooterItem>
    )
  })
  
  return (
      <List>            
        {items}
      </List>
)}


// Constant Arrays
const dropdownList = [
  {
    id: 1,
    title: 'Online Books',
    link: '/activities',
    itemWidth: '80px'
  },
  {
    id: 2,
    title: 'About',
    link:'/about',
    itemWidth: '45px'
  },
  {
    id: 3,
    title: 'Give Feedback',
    link: 'feedback',
    itemWidth: '57px'
  }
];


// Styling
const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 50px 0 30px 0;
  font-size: 18px;
  color: darkgray;
  list-style-type: none;
`
               
const FooterItem = styled.li`
  margin: 0 15px;
`