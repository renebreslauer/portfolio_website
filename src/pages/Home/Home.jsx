import React from 'react'
import {
  GooButton,
  RAnimation,
  Subtitle,
  TitleAnimation,
} from '../../components/index'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 50vw auto;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    justify-itmes: center;
    padding: 1rem;
  }
`
const HomeLeft = styled.div`
  margin-left: 10vw;
  margin-top: 15rem;
  @media (max-width: 750px) {
    margin-left: 0;
    margin-top: 0;
  }
`

const HomeRight = styled.div`
  margin-right: 10vw;
 
  }
`

function Home() {
  return (
    <>
      <HomeWrapper>
        <HomeLeft>
          <TitleAnimation />
          <Subtitle text="[ Developer + Designer ]" />
          <GooButton text="Let's Chat" />
        </HomeLeft>
        <HomeRight>
          <RAnimation />
        </HomeRight>
      </HomeWrapper>
    </>
  )
}

export default Home
