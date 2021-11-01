import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteBeer } from '../../_action/cart_action'
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
  ImgWrapper,
} from './StyledCart'

const CartWrapper = () => {
  const state = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const deleteBeerHandler = (id) => {
    dispatch(deleteBeer(id))
    //modal
  }

  return (
    <Container>
      <Wrapper>
        <ListWrapper>
          <AboutP>총 {state.beerList.length} 개의 맥주 </AboutP>
          <CartUl>
            {state.beerList &&
              state.beerList.map((beer) => {
                return (
                  <LiWrapper key={beer.id}>
                    <ImgWrapper>
                      <BeerImg src={beer.imageUrl} alt="beer"></BeerImg>
                    </ImgWrapper>

                    <BeerNameTagContent>
                      <BeerNameH2>{beer.name}</BeerNameH2>
                      <BearP>{beer.tagline}</BearP>
                    </BeerNameTagContent>
                    <BeerAttrWrapper>
                      <BearP>ABV : {beer.abv}</BearP>
                      <BearP>IBU : {beer.ibu}</BearP>
                      <BearP>SRM : {beer.srm}</BearP>
                    </BeerAttrWrapper>
                    <BtnWrapper>
                      <Btn type="button">자세히 보기</Btn>
                      <Btn
                        type="button"
                        onClick={() => {
                          deleteBeerHandler(beer.id)
                        }}
                      >
                        맥주 삭제
                      </Btn>
                    </BtnWrapper>
                  </LiWrapper>
                )
              })}
          </CartUl>
        </ListWrapper>
      </Wrapper>
    </Container>
  )
}

export default CartWrapper
