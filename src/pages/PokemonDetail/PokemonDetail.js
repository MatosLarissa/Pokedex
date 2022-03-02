import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import Header from "../../components/Header/Header"
import { useHistory, useParams } from "react-router-dom";
import { Progress, Stack, Text } from "@chakra-ui/react";
import gifPokebola from "../../public/gifPokebola.gif"
import { Powers, Attacks, ContainerAll, Load, Title, PokeInfosContainer, ImagesContainer, ImgWrapper, StatsContainer } from './style';
import { goToPokedex, goToPokemonsList } from "../../router/coordinator";
import axios from "axios";
import { GlobalStateContext } from "../../global/GlobalStateContext";



const PokemonDetail = () => {
  const { name, telaPokedex } = useParams();
  const history = useHistory();
  const { pokemonDetail, pokedex } = useContext(GlobalStateContext);
  const [selectedPokemon, setSelectedPokemon] = useState({});


  useEffect(() => {
    let current = [];
    if (telaPokedex) {
      current = pokedex.find((item) => {
        return item.name === name;
      });
    } else {
      current = pokemonDetail.find((item) => {
        return item.name === name;
      });
    }

    if (!current) {
      axios
        .get(`${BASE_URL}/pokemon/${name}`)
        .then((res) => setSelectedPokemon(res.data))
        .catch((err) =>  err.response.message);
    } else {
      setSelectedPokemon(current);
    }
  }, [telaPokedex, name, pokedex, pokemonDetail]);

  const powers =
    selectedPokemon.stats &&
    selectedPokemon.stats.map((stat) => {
      return (
        <>
          <h3>
            <p key={stat.stat.name}>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </h3>


          <Progress
            colorScheme='yellow'
            size='sm'
            value={stat.base_stat}
          />

        </>
      );
    });

  const attacks =
    selectedPokemon.moves &&
    selectedPokemon.moves.map((ataque, index) => {
      return (
        index < 5 && (
          <Text key={ataque.move.name} fontSize={20} fontWeight="bold">
            {ataque.move.name}
          </Text>
        )
      );
    });

  return (
    <>
      <Header
        home={goToPokemonsList}
        pokedex={goToPokedex}
        history={history}
      />
      <ContainerAll>

        <>
          <PokeInfosContainer>

            {selectedPokemon && selectedPokemon.sprites ? (
              <>
                <Powers>
                  <Stack spacing={3}>
                    <Title>Powers</Title>
                    {powers}
                  </Stack>
                </Powers>
                <ImagesContainer>
                  <Title>{selectedPokemon.name}</Title>
                  <ImgWrapper src={selectedPokemon.sprites.other["official-artwork"].front_default} />
                  <Text fontWeight="bold" color="#ffcb05" fontSize={25}>Type</Text>
                  {selectedPokemon &&
                    selectedPokemon.types.map((type) => {
                      return <Text fontSize={15} key={type.type.name}>{type.type.name}</Text>;
                    })}
                </ImagesContainer>

                <StatsContainer>
                  <Title>Attacks</Title>
                  <Attacks>
                    {attacks}
                  </Attacks>

                </StatsContainer>
              </>
            ) : (
              <Load src={gifPokebola} />

            )}
          </PokeInfosContainer>
        </>
      </ContainerAll>
    </>
  )
}

export default PokemonDetail;