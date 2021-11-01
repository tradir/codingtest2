import React, { useEffect } from 'react'
import { Container, Wrapper, Logo, BtnWrapper, Btn } from './StyledHeader'
import { useHistory, useLocation } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <Container>
      <Wrapper>
        <Logo>All Good Bear</Logo>
        <BtnWrapper>
          <Btn
            className="Home"
            onClick={() => {
              history.push('/home')
            }}
          >
            Home으로 이동하기
          </Btn>
          {location.pathname === '/cart' ? (
            <Btn
              onClick={() => {
                history.push('/bearlist')
              }}
            >
              Bear List로 이동하기
            </Btn>
          ) : (
            <Btn
              onClick={() => {
                history.push('/cart')
              }}
            >
              Cart로 이동하기
            </Btn>
          )}
        </BtnWrapper>
      </Wrapper>
    </Container>
  )
}

export default Header
