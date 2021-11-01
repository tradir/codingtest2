/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Container, Wrapper } from './StyledBeerList'
import { useDispatch } from 'react-redux'
import { addBeerToCart } from '../../_action/cart_action'
import store from '../../store/store'
import Table from './Table'

const BeerListWrapper = () => {
  const dispatch = useDispatch()
  const [beerList, setBeerList] = useState([])

  const addBeer = useCallback((data) => {
    console.log('add', data)
    const beers = store.getState().cart.beerList
    // length가 4인지 확인한다.
    if (beers.length >= 10) {
      // setModalState(0)
      // return setOpenModal(true)
      return alert('초과')
    }
    // 같은 맥주인지 확인
    const checked = beers.filter((item) => {
      return data.id === item.id
    })
    console.log('checlk', checked)
    if (checked.length !== 0) {
      // setModalState(1)
      // return setOpenModal(true)
      return alert('checked')
    }
    dispatch(addBeerToCart(data))
  }, [])

  useEffect(() => {
    return axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then((res) => {
        const data = res.data.map((list) => {
          const data = {
            id: list.id,
            name: list.name,
            tagline: list.tagline,
            abv: list.abv,
            ibu: list.ibu,
            srm: list.srm,
            imageUrl: list.image_url,
            description: list.description,
            brewers_tips: list.brewers_tips,
            food_pairing: list.food_pairing,
          }

          return data
        })
        setBeerList(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Wrapper>
        {beerList ? <Table beerList={beerList} addBeer={addBeer} /> : null}
      </Wrapper>
    </Container>
  )
}

export default BeerListWrapper
