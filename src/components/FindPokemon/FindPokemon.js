import React, { useState, useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { Card, FindPokemonContainer, Button, ContainerButton, ImgPokemon, Border, ContainerBorder } from './style'
import fight from '../../public/fight.gif'
import trash from '../../public/trash.gif'

const FindPokemon = (props) => {
    const { pokedex, setPokedex, pokemonDetail, setPokemonDetail } = useContext(GlobalStateContext);

    const [name] = useState(props.poke.name)
    const [photo] = useState(props.poke.sprites.versions["generation-v"]["black-white"].animated.front_default);

    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => {
            return item.name === props.poke.name;
        });

        const newPokedexList = [...pokedex];
        newPokedexList.splice(pokeIndex, 1);

        const newPokemonList = [...pokemonDetail, props.poke];
        const order = newPokemonList.sort((a, b) => {
            return a.id - b.id;
        });

        setPokedex(newPokedexList);
        setPokemonDetail(order);
    };


    let power = props.poke.stats.reduce(
        (powerBefore, power) => powerBefore + power.base_stat,
        0
    );

    return (

        <FindPokemonContainer>
            <Card>
                <ContainerBorder>
                    <Border>
                        <ImgPokemon
                            src={props.poke.sprites.versions["generation-v"]["black-white"].animated.front_default}
                            alt={"Version Pokemon"}
                        />
                        <p>{props.poke.name}</p>
                    </Border>
                </ContainerBorder>
                <ContainerButton>

                    <Button onClick={() => props.comparePowerOfBattle(power, name, photo)}>
                        <img
                            src={fight}
                            alt={"Lutar"}
                        />
                    </Button>

                    <Button onClick={removeFromPokedex}>
                        <img id={"Remove"}
                            src={trash}
                            alt={"remove"}
                        />
                    </Button>

                </ContainerButton>
            </Card>
        </FindPokemonContainer>

    )
}

export default FindPokemon;
