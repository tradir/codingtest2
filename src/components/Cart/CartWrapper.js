import React from 'react'
import {
  Container,
  Wrapper,
  ListWrapper,
  AboutP,
  CartUl,
  LiWrapper,
  BtnWrapper,
  Btn,
  BeerImg,
  BeerNameTagContent,
  BeerNameH2,
  BearP,
  BeerAttrWrapper,
} from './StyledCart'

const CartWrapper = () => {
  return (
    <Container>
      <Wrapper>
        <ListWrapper>
          <AboutP>총 갯수: </AboutP>
          <CartUl>
            <LiWrapper>
              <BeerImg src="/" alt="beer"></BeerImg>
              <BeerNameTagContent>
                <BeerNameH2>Berliner Weisse With Yuzu - B-Sides</BeerNameH2>
                <BearP>Japanese Citrus Berliner Weisse.</BearP>
              </BeerNameTagContent>
              <BeerAttrWrapper>
                <BearP>ABV : 4.2</BearP>
                <BearP>IBU : 8</BearP>
                <BearP>SRM : 4</BearP>
              </BeerAttrWrapper>
              <BtnWrapper>
                <Btn type="button">자세히 보기</Btn>
              </BtnWrapper>
            </LiWrapper>
          </CartUl>
        </ListWrapper>
      </Wrapper>
    </Container>
  )
}

export default CartWrapper
