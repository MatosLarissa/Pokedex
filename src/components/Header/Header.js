import { DisplayHeader, ImagemPrincipalHeader, DisplayButton, DisplayButton2 } from './style';
import pokemonLogo from '../../public/pokemonLogo.png'
import { Link, useHistory } from 'react-router-dom'
import arrow from '../../public/arrow.gif'
import pokedex from '../../public/pokedex.gif'
import { Box } from '@chakra-ui/react'

const Header = (props) => {
    const history = useHistory();

    const pokedexImg = <DisplayButton2>
        <img className="Pokedex" onClick={() => { props.pokedex(props.history) }} src={pokedex} alt={"pokedex"} />
    </DisplayButton2>

    const backImg = <DisplayButton>
        <img className="Back" onClick={() => { props.home(props.history) }} src={arrow} alt={"back"} />
    </DisplayButton>

    const duasImg = <>
        <DisplayButton2>
            <img className="Pokedex" onClick={() => { props.pokedex(props.history) }} src={pokedex} alt={"pokedex"} />
        </DisplayButton2>
        <DisplayButton>
            <img className="Back" onClick={() => { props.home(props.history) }} src={arrow} alt={"back"} />
        </DisplayButton>
    </>

    const leftButtonTitle = () => {
        switch (history.location.pathname) {
            case "/":
                return pokedexImg;
            case "/pokedex":
                return backImg;
            case "/pokemon/:name/:telaPokedex?":
                return pokedexImg;
            default:
                return duasImg;
        }
    };

    return (
        <Box opacity='1' bgGradient='linear(to-l, #e00000, #e00000)' w='100%' p={1} color='white' position='fixed'>
            <DisplayHeader id={"ColorHeader"}>
                <Link to="/">
                    <ImagemPrincipalHeader src={pokemonLogo} alt="Logo Pokemon" />
                </Link>
                {leftButtonTitle()}
            </DisplayHeader>
        </Box>
    )
}


export default Header;