import React, { useState } from 'react'
import styled from 'styled-components'

// component imports
import IntroPage from './frames/IntroPage'
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

const AppView = styled.div`
    height: 100%;
    background-color: rgb(227, 147, 132);
`
const Header = styled.div`
    height: 10%;
    width: 100%;
    border-bottom: 2px solid white;

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
    height: 90%;
`


function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    })
  }
  
  backdropClickHandler = () => {
    
  }
  

  return (
    <AppView>
      {/* <Header> */}
        {/* <NameText>Darius Raazi</NameText> */}
        <Toolbar />
        <SideDrawer />


      {/* </Header> */}
      {/* this is where all body wil go so it can scroll with a fixed header */}
      <ScrollContent>
        <IntroPage />
      </ScrollContent>
    </AppView>
  );
}

export default App;
