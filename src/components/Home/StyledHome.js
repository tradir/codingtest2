import styled from 'styled-components'

export const Container = styled.section`
  height: 90vh;
  background-color: #eff2f8;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 0;
`

export const Logo = styled.h1`
  font-size: 40px;
  margin-bottom: 24px;

  @media screen and (min-width: 670px) {
    font-size: 72px;
    margin-bottom: 32px;
  }
`

export const HomeDesc = styled.p`
  font-size: 20px;
  margin-bottom: 10px;

  @media screen and (min-width: 670px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`

export const HomeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 670px) {
    flex-direction: row;
  }
`

export const Button = styled.button`
  margin: 20px;
  width: 300px;
  height: 250px;
  padding: 30px 20px;
  background-color: #fff;
  border: none;
  font-size: 32px;
  line-height: 3rem;
  border-radius: 12px;
  cursor: pointer;

  @media screen and (min-width: 670px) {
    margin: 20px;
    width: 300px;
  }
`
