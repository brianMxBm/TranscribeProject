import React from 'react';
import styled from 'styled-components';
import bg from '../assets/img/bg.svg'
import Navigation from './Navigation';
import HeaderContent from './HeaderContent'

export default function Header() {
  return(
    <HeaderStyled>
        <div className='header-content'>
            <Navigation></Navigation>
            <HeaderContent></HeaderContent>
        </div>
    </HeaderStyled>
  ) 
}


const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }
`;
   