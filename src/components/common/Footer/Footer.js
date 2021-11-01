import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <h3>Codingtest</h3>
        <p>© 2021. Heo Yong Jun. All rights reserved.</p>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;

  text-align: center;
  background-color: #eff2f8;
`

export const FooterWrapper = styled.div`
  padding: 25px;
  > h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`
