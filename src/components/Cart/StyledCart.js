import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #eff2f8;
  padding: 0 0 10px 0;
`

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
export const ListWrapper = styled.div`
  width: 100%;
  background-color: white;
`

export const CartUl = styled.ul`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px 0 10px 0;
  border-top: 3px solid #efefef;
`

export const LiWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 3px solid #efefef;
  padding: 0px 15px;
  @media screen and (min-width: 600px) {
    padding: 10px 30px;
  }
`
export const BeerLi = styled.div`
  display: flex;
  min-width: 220px;
  width: 100%;
`

export const BeerImg = styled.img`
  width: 70px;
  height: 70px;
  @media screen and (min-width: 600px) {
    width: 100px;
    height: 100px;
  }
`

export const BeerNameTagContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
`

export const BeerNameH2 = styled.h2`
  margin: 0 5px 8px 5px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  @media screen and (min-width: 600px) {
    margin: 8px 0;
  }
  @media screen and (min-width: 700px) {
    font-size: 20px;
  }
`
export const BearP = styled.p`
  font-size: 12px;
  margin: 0 5px;
  @media screen and (min-width: 600px) {
    font-size: 16px;
    margin: 4px 0;
  }
`

export const BeerAttrWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 600px) {
    flex-direction: column;
    width: 80px;
  }
`

export const Btn = styled.button`
  width: 60px;
  height: 35px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 12px;
  padding: 4px 0 0 0;
  margin: 5px 0;
  outline: none;
  border: none;
  cursor: pointer;
  color: #7c7c7c;
  > a {
    color: #7c7c7c;
    text-decoration: none;
  }
  @media screen and (min-width: 670px) {
    font-size: 15px;
    width: 80px;
    height: 50px;
    margin: 0 10px;
  }

  &:hover {
    color: #000;

    > a {
      color: #000;
    }
  }
`

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`
export const AboutP = styled.p`
  padding: 10px 0 10px 10px;
  font-size: 16px;

  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`
