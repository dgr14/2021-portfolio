import React from 'react'
import styled from 'styled-components'

// component imports
import introPage from './frames/introPage'

const AppView = styled.div`
  // just need this for a short time, going to need to make the page scollable, each inv frame will probably be 100vh for ease
  height: 100vh;
  background-color: red;

`

function App() {
  return (
    <AppView>
      <introPage />
    </AppView>
  );
}

export default App;
