import React from 'react'
import styled from 'styled-components'

const introContainer = styled.div`
    height: 100vh;

`

const nameText = styled.h2`

`

const introPage = () => {
    return(
        <introContainer>
            <nameText>Darius Raazi</nameText>
        </introContainer>
    )
}

export default introPage