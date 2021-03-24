import React from 'react'
import styled from 'styled-components'

const BDContainer = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
`

const backdrop = props => (
    <BDContainer>
        
    </BDContainer>
)

export default backdrop