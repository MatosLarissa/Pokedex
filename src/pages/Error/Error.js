import { useHistory } from 'react-router-dom';
import { ContainerAll, InfoContainer, Img } from './style';
import Confuse from '../../public/Confuse.gif'

export const Error = () => {
    const history = useHistory();
    const handleClick = () => history.push("/");

    return (
        <ContainerAll>
            <InfoContainer>
                <Img src={Confuse} />
                <p>The page not found!</p>
                <button onClick={handleClick}>Back Home</button>
            </InfoContainer>
        </ContainerAll>
    )
};

export default Error;