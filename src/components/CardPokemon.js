import React, { useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import { goToPokemonDetail } from '../../router/coordinator';
import { BorderImg, Card, PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer, NameContainer } from "./style";

const CardPokemon = (props) => {
    const history = useHistory()
    const { pokedex, setPokedex, pokemonDetail, setPokemonDetail } = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokemonIndex = pokemonDetail.findIndex((pokemon) => {
            return pokemon.name === props.poke.name
        })

        const newPokemonList = [...pokemonDetail]
        newPokemonList.splice(pokemonIndex, 1)

        const newPokedexList = [...pokedex, props.poke]
        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
        })

        setPokemonDetail(newPokemonList)
        setPokedex(orderedPokedex)
    };

    const removeFromPokedex = () => {
        const pokemonIndex = pokedex.findIndex((pokemon) => {
            return pokemon.name === props.poke.name
        })

        const newPokemonList = [...pokemonDetail]
        newPokemonList.splice(pokemonIndex, 1)
        const newPokedexList = [...pokedex, props.poke]
        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
        })

        setPokemonDetail(newPokemonList)
        setPokedex(orderedPokedex)
    }

    return (
        <PokeCardContainer>
            <Card>
                <ImgContainer>
                    <BorderImg>
                        <PokeImg
                            src={props.poke.sprites.versions['generation-v']['black-white'].animated.front_default}
                            alt={props.poke.name} />
                        <NameContainer>
                            {props.poke.name}
                        </NameContainer>
                    </BorderImg>
                </ImgContainer>
                <ButtonsContainer>
                    <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
                        <span>{props.isPokedex ? "Remove" : "Pokedex"}</span>
                    </button>
                    <button
                        onClick={() =>
                            goToPokemonDetail(history, props.poke.name, props.isPokedex)
                        }
                    >
                        <span>Details</span>
                    </button>


                </ButtonsContainer>
            </Card>

        </PokeCardContainer>
    )
};

export default CardPokemon;
