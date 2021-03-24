import React from 'react'
import styled from 'styled-components'

const ToggleButton = styled.button`
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    :focus{
        outline: none;
    }
`
const ToggleLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;

`

const drawerToggleButton = props => (
    <ToggleButton>
        <ToggleLine></ToggleLine>
        <ToggleLine></ToggleLine>
        <ToggleLine></ToggleLine>
    </ToggleButton>
);

export default drawerToggleButton