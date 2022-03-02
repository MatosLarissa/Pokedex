import React from "react";
import Header from "../../components/Header/Header";
import FindPokemon from "../../components/FindPokemon/FindPokemon";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {
  ContainerAll,
  PokedexContainer,
  Container,
  Title,
  PokeImage,
  BattleContainer,
} from "./style";
import { Snackbar } from "@material-ui/core";
import { useState } from "react";
import { goToPokedex, goToPokemonsList } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import desert from '../../public/image/desert.gif'

function Pokedex() {
  const history = useHistory();
  const { pokedex } = useContext(GlobalStateContext);
  const [power, setPower] = useState([]);
  const [winner, setWinner] = useState(-1);

  const comparePowerOfBattle = (totalPower, name, photo) => {
    if (power.length === 0) {
      setPower([{ totalPower, name, photo }]);
    } else {
      setPower([...power, { totalPower, name, photo }]);
      if (power[0].name === name) {
        alert("Choose a different Pokemon");
      } else if (power[0].totalPower > totalPower) {
        setWinner(0);
      } else if (power[0].totalPower < totalPower) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setTimeout(() => {
        setWinner(-1);
        setPower([]);
      }, 3000);
    }
  };

  const listPokedex =
    pokedex &&
    pokedex.map((poke) => {
      return (
        <FindPokemon poke={poke} comparePowerOfBattle={comparePowerOfBattle} />
      );
    });


  function load() {
    if (listPokedex.length === 0) {
      return (
        <div id={"Load"}><p id={"loadP"}>No pokemon around here ...</p><img id={"LoadImg"} src={desert} alt={"Gif desert"} /></div>
      )
    } else {
      return listPokedex
    }
  }


  return (
    <>
    <Header
    home={goToPokemonsList}
    pokedex={goToPokedex}
    history={history}
  />
    <ContainerAll>

      <PokedexContainer>

        <Title>Your Pokedex</Title>
        <Container>

          {load()}
        </Container>

        <Snackbar
          transitionDuration={1}
          autoHideDuration={1}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={power.length > 0}
          message={
            <BattleContainer>
              <div>
                {power.length > 0 && (
                  <div id={"PokeName"}>
                    <PokeImage src={power[0].photo} alt="pokemon selected" />
                    <h2>{power[0].name}</h2>
                  </div>
                )}
                <h1 id={"Vs"}>Vs</h1>
                {power.length > 1 && (
                  <div id={"PokeName"}>
                    <PokeImage src={power[1].photo} alt="pokemon selected" />
                    <h2>{power[1].name}</h2>
                  </div>
                )}
              </div>
              <div id={"winner"}>
                {(winner === 0 || winner === 1) && (
                  <p>{power[winner].name} WON!</p>
                )}
                {winner === 2 && <p id={"Tied"}>TIED!</p>}
              </div>
            </BattleContainer>
          }
        />
      </PokedexContainer>
    </ContainerAll>
    </>
  );
}
export default Pokedex;