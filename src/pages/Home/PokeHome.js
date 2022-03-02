import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Header from "../../components/Header/Header"
import { goToPokedex, goToPokemonsList } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import { Container2, ContainerAll, PokeListContainer } from './style';


export const PokeHome = () => {
    const history = useHistory()
    const { pokemonDetail } = useContext(GlobalStateContext)

    const listPokemons = pokemonDetail.map((poke) => {

        return <CardPokemon key={poke} poke={poke} />

    });



    return (
        <>
            <Header
                home={goToPokemonsList}
                pokedex={goToPokedex}
                history={history}
            />
            <ContainerAll>

                <Container2>


                    <PokeListContainer>
                        {listPokemons}
                    </PokeListContainer>


                </Container2>
            </ContainerAll>
        </>
    );
};

export default PokeHome;