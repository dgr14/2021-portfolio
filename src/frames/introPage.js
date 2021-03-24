import React from 'react'
import styled from 'styled-components'

const IntroContainer = styled.div`
    height: 300vh;
    width: 100%;
    background-color: green;

`

const IntroPage = () => {
    return(
        <IntroContainer>
            Hello world
        </IntroContainer>
    )
}

export default IntroPage;