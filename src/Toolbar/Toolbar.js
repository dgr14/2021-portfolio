import React from 'react'
import styled from 'styled-components'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
// .toolbar
const ToolbarHeader = styled.header`
    height: 10%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(227, 147, 132);
    color: white;
`
// .toolbar__navigation
const ToolbarNav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
`
// THIS DIV IS INTENTIONALLY BLANK - HAMBURGER HOLDER
const Hamburger = styled.div`

`
// .toolbar__logo 
const NameContainer = styled.div`
    margin-left: 1rem;
`
// THIS IS GOING TO BE THE LOGO LINK ANCHOR TAG - NO CLASS SO FAR
const NameLink = styled.a`

`
// .toolbar_naviagtion-items
const LinkHolder = styled.div`


`
// THIS UL HAS NO CLASSNAME YET
const LinkList = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
`
// 
const Linkli = styled.li`
    padding: 0 0.5rem;
`
// 
const Link = styled.a`
    :hover, :active{
        color: orange;
    }
`
const Spacer = styled.div`
    flex: 1;
`

const toolbar = props => (
    <ToolbarHeader>
        <ToolbarNav>
            <Hamburger>
                <DrawerToggleButton />
            </Hamburger>
            {/* 'toolbar__logo' */}
            <NameContainer><NameLink>Darius Raazi</NameLink></NameContainer>
            <Spacer />
            <LinkHolder>
                <LinkList>
                    <Linkli><Link href='/'>Products</Link></Linkli>
                    <Linkli><Link href='/'>Users</Link></Linkli>
                    <Linkli><Link href='/'>Something Else</Link></Linkli>
                </LinkList>
            </LinkHolder>
        </ToolbarNav>
    </ToolbarHeader>
)

export default toolbar