import React from 'react'
import styled from 'styled-components'

// component imports
import introPage from './frames/introPage'

const AppView = styled.div`
  // just need this for a short time, going to need to make the page scollable, each inv frame will probably be 100vh for ease
  height: 100vh;
  background-color: rgb(227, 147, 132);
`
const Header = styled.div`
    height: 10%;
    width: 100%;
    // border-bottom: 2px solid red;

    display: flex;
    align-items: center;
    justify-content: center;
`
const NameText = styled.h2`
    color: white;
    font-weight: 300;
    font-size: 25pt;
`
const ScrollContent = styled.div`
  overflow-y: scroll;
`

function App() {
  return (
    <AppView>
      <Header>
        <NameText>Darius Raazi</NameText>
      </Header>
      {/* this is where all body wil go */}
      <ScrollContent>
        <introPage />
      </ScrollContent>
    </AppView>
  );
}

export default App;
