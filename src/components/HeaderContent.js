import React from 'react';
import styled from 'styled-components';
import Tilt from  'react-tilt';
import SecondaryButton from './SecondaryButton';
import tilt from '../assets/img/tilt.png'
import ring from '../assets/img/ring_orange.svg';
import message from '../assets/img/message_pink.svg'
import message1 from '../assets/img/message_blue.svg'

function HeaderContent() {
  return(
    <HeaderContentStyled>
        <div className='left-content'>
            <div className="left-text-container">
              <h1>Transcription For All</h1>
              <p className="white">
                This is random text that I've brought up and hey this is random text
                why don't you take a look at the source code. This is really sick.
              </p>
              <SecondaryButton name={'Try It Now'}/>
            </div>
        </div>
        <div className='right-content'>
          <TiltWrapper>
            <Img src={tilt}/>
          </TiltWrapper>
            <img src={message} alt="" className="message"/>
            <img src={message1} alt="" className="message1"/>
        </div>
    </HeaderContentStyled>
  )
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 10%;
  .left-content{
    display:flex;
    align-items: center;
    padding-right: 3rem;

    h1{
      font-size: 4rem;
      font-weight: 700;
    }

    .white{
      padding: 1.4rem 0;
      line-height: 1.8rem;
       
    }
  }

  .right-content{
    position: relative;
    display: flex;
    justify-content: center;
    .phone{
        width: 80%;
    }
    .ring1{
        position: absolute;
        bottom: -10%;
        right: 0;
        left: auto;
        animation: move2 20s infinite;
        transition: all .4s ease-in-out;
    }
    .message{
        position: absolute;
        top: -80px;
        right: 0;
        left: auto;
        animation: move 5s infinite;
        transition: all .4s ease-in-out;
    }
    .message1{
        position: absolute;
        top: -8%;
        left: 0;
        transition: all .4s ease-in-out;
        animation: move 8s infinite;
        animation-delay: .5s;
        transition: all .4s ease-in-out;
    }
}

.message{
    @keyframes move{
        0%{
            transform: translateY(0) rotate(0) scale(1) translateX(0);
        }
        50%{
            transform: translateY(-10px) rotate(20deg) scale(1.3) translateX(10px);
        }
        100%{
            transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
        }
    }
    @keyframes move2{
        0%{
            transform: translateY(0) rotate(0) scale(1) translateX(0);
        }
        50%{
            transform: translateY(-10px) rotate(60deg) scale(1.3) translateX(10px);
        }
        100%{
            transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
        }
    }
}
`;



const TiltWrapper= styled(Tilt)`
  width: 90%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
    transform: scale(1.1);
`;

export default HeaderContent 