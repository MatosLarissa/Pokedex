import styled from "styled-components";

export const FindPokemonContainer = styled.div`
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 40px 0;  
`;

export const Card = styled.div`

      display:grid;
      position: relative;
      width: 250px;
      height: 250px;
      margin: 0 auto;
      border-radius: 15px;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    transform: scale(1.1, 1.1);
    transition-duration: 0.3s;
  }
`;

export const ContainerBorder = styled.div`
  border: 1px black solid;
  border-radius: 30px 30px 30px 30px;
  margin: 5px;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) 
  *, :after, :before {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  *, ::after, ::before {
      box-sizing: border-box;
  }
`;

export const Border = styled.div`
  background: linear-gradient(11deg, rgba(177,173,236,0.9447129193474265) 0%, rgba(222,91,251,0.8914916308320203) 21%, rgba(175,24,225,0.8550770650056898) 43%, rgba(157,126,252,0.7654412106639531) 55%, rgba(104,193,229,1) 72%, rgba(0,212,255,1) 100%);
  -webkit-box-shadow: 4px 2px 21px 13px rgba(167,4,234,0.12), 4px 2px 31px 13px rgba(51,29,234,0.14), 4px 2px 31px 13px rgba(51,29,234,0.14); 
  box-shadow: 4px 2px 21px 13px rgba(167,4,234,0.12), 4px 2px 31px 13px rgba(51,29,234,0.14), 4px 2px 31px 13px rgba(51,29,234,0.14);
  height: 165px;
  width: 210px;
  border-radius: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  div {
    display: flex;
    gap: 5px;
    border: 1px white solid;
    margin-bottom: 2px;
  }
  p {
    border: none !important;
    color: #000;
    font-family: 'Bungee Inline', cursive;
    font-size:15px;
    text-align: center;
    text-transform: capitalize;
    :hover{
      color: #56EA65;
    }
  }
`;

export const ImgPokemon = styled.img`
  margin-top: 10px;
  width: 100px;
`;

export const ContainerButton = styled.div`
  display: flex;
  background-color: none;
  justify-content: space-around;
  img {
    width: 38px;
  }
`;

export const Button = styled.div`
  border: none;
  background-color: none;
  img{
      width: 50px;
      border-radius: 10px 10px 10px 10px;
  }
  &:hover {
    transform: scale(1.9, 1.9);
    transition-duration: 0.5s;
  }
  #Remove{
    margin-top: 5px;
  }
  
`;





