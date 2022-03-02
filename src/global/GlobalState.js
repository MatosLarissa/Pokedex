import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalStateContext } from './GlobalStateContext';
import { BASE_URL } from '../constants/BASE_URL';

export const GlobalState = (props) => {
  const [pokemonsNames, setPokemonsNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()


  useEffect(() => {
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((response) => {
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setPokemonsNames(response.data.results)
    })
    return () => cancel()
  }, [currentPageUrl]);

  useEffect(() => {
    const newPokemonDetail = []
    pokemonsNames.forEach((poke) => {
      axios.get(poke.url)
        .then((res) => {
          newPokemonDetail.push(res.data)
          if (newPokemonDetail.length === 20) {
            const order = newPokemonDetail.sort((a, b) => {
              return a.id - b.id
            })
            setPokemonDetail(order)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }, [pokemonsNames])

  const data = {
    pokedex,
    setPokedex,
    pokemons,
    setPokemons,
    pokemonDetail,
    setPokemonDetail,
    currentPageUrl,
    setCurrentPageUrl,
    nextPageUrl,
    setNextPageUrl,
    prevPageUrl,
    setPrevPageUrl
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};