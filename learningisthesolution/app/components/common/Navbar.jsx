// Package dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


// Component dependencies and data files
import {colors} from '../../master.json';


// Component for displaying the navbar on pages
export default function Navbar() {
  const items = dropdownList.map(unit => {
    return (
      <NavbarItem key={unit.id}>
        <Link to={unit.link} style={{color:'inherit', textDecoration:'none'}}>
          <div>{unit.title}</div>
        </Link>
      </NavbarItem>
    )
  })
  
  return (
    <Container>
      <LogoContainer>
        <LogoLink to="/">
          <Logo src="/assets/Logo-White-Small.png" alt="Learning is the Solution logo"/>
        </LogoLink>
      </LogoContainer>
      <ListContainer>
        <List>            
          {items}
        </List>
      </ListContainer>
    </Container>
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
const Container = styled.header`
  display: flex;
  padding: 5px;
  min-width: 550px;
  min-height: 60px;
  background-color: ${colors.LITS.color};

  @media screen and (max-width: 900px){
    flex-direction: column;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex: 0 0 260px;
  justify-content: center;
  padding: 5px;
  border-radius: 30px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }
  
  @media screen and (max-width: 900px){
    flex: 1 1 100px;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  width: 90%;
  max-width: 250px;

  @media screen and (max-width: 900px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const ListContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  margin-right: 20px;
  padding: 0;
  max-width: 600px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  list-style-type: none;
`
               
const NavbarItem = styled.li`
  padding: 10px;
  border-radius: 15px;
  margin: 10px 30px;

  :hover{
    background-color: ${colors.LITS.darkColor};
    cursor: pointer;
  }
`