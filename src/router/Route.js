import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeHome from '../pages/Home/PokeHome'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import Pokedex from '../pages/Pokedex/Pokedex'
import Error from '../pages/Error/Error'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"
                    component={PokeHome} />
                <Route
                    exact
                    path="/pokemon/:name/:telaPokedex?"
                    component={PokemonDetail}
                />
                <Route exact path="/pokedex"
                    component={Pokedex} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;