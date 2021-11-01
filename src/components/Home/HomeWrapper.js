import React from 'react'
import {
  Container,
  Wrapper,
  Logo,
  HomeDesc,
  HomeBtnWrapper,
  Button,
} from './StyledHome'
import { useHistory } from 'react-router-dom'

const HomeWrapper = () => {
  const history = useHistory()

  return (
    <Container>
      <Wrapper home="home">
        <Logo>All Good Beer</Logo>
        <HomeDesc>나한테 맞는 맥주 찾기</HomeDesc>
        <HomeDesc>
          맥주의 IBU, ABU, SRM에 따라 맛있는 맥주를 찾아보세요
        </HomeDesc>
        <HomeBtnWrapper>
          <Button type="button" onClick={() => history.push('/bearlist')}>
            Beer List에서
            <br /> 나만의 맥주 찾기
          </Button>
          <Button type="button" onClick={() => history.push('/cart')}>
            내가 담은 맥주
            <br /> 보러 가기
          </Button>
        </HomeBtnWrapper>
      </Wrapper>
    </Container>
  )
}

export default HomeWrapper
