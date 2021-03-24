import React from 'react'
import styled from 'styled-components'
// .side-drawer
const SideNav = styled.nav`
    height: 100%;
    background: white;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0,5);
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    z-index: 200;
`
const NavList = styled.ul`

`
const Navli = styled.li`

`
const NavAnchor = styled.a`

`

const sideDrawer = props => (
    <SideNav>
        <NavList>
            <Navli><NavAnchor href='/'>Products</NavAnchor></Navli>
            <Navli><NavAnchor href='/'>Users</NavAnchor></Navli>
            <Navli><NavAnchor href='/'>Somethings Else</NavAnchor></Navli>
        </NavList>
    </SideNav>
)

export default sideDrawer