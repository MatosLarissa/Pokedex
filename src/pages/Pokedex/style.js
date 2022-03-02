import styled from 'styled-components'
export const ContainerAll = styled.div`
overflow-x: hidden;
padding: 90px 0px 0px;
`;

export const PokedexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

`;

export const Title = styled.h1`
  padding-top: 1rem;
  color: #ffcb05;
  text-align: center;
  height: 20px;
  text-shadow: 1px 3px 1px #2b72b8;
  font-size: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: 'Bungee Inline', cursive;
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  #Load{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #loadP{
    font-family: 'Bungee Inline', cursive;
    color:#ff7b28;
    text-shadow: 1px 1.5px 1px #59c853;
    font-size:60px;
    margin: 20% 0px 0px
  }
  #LoadImg{
    width: 60%;
  }
  @media (max-width: 768px) {
    width: auto;
    #loadP{
    font-family: 'Bungee Inline', cursive;
    font-size:25px;
    margin: 20% 0px 0px
    
  }
    #LoadImg{
    width: 80%;
  }
  }
`

export const BattleContainer = styled.div`
   display: flex;
  flex-direction: column;
  > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  align-self: center;
 > div {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin: 0 18px;
 }
 h1 {
  font-family: 'Bungee Inline', cursive;
 }
img {
    width: 100px!important;
    height: 100px!important;
    border-radius: 5px;
    background: linear-gradient(11deg, rgba(177,173,236,0.9447129193474265) 0%, rgba(222,91,251,0.8914916308320203) 21%, rgba(175,24,225,0.8550770650056898) 43%, rgba(157,126,252,0.7654412106639531) 55%, rgba(104,193,229,1) 72%, rgba(0,212,255,1) 100%);
    -webkit-box-shadow: 4px 2px 21px 13px rgba(167,4,234,0.12), 4px 2px 31px 13px rgba(51,29,234,0.14), 4px 2px 31px 13px rgba(51,29,234,0.14); 
    box-shadow: 4px 2px 21px 13px rgba(167,4,234,0.12), 4px 2px 31px 13px rgba(51,29,234,0.14), 4px 2px 31px 13px rgba(51,29,234,0.14);
}
h2 {
    text-transform: capitalize;
}
}
#winner {
    width: 100%;
    color:#7dd274;
    text-align: center;
    font-size: 60px;
    text-transform:capitalize;
}
#Tied {
    width: 100%;
    color:#ffcb05;
    text-align: center;
    font-size: 60px;
    text-transform:capitalize;
}
#Vs {
    color:#e00000;
    font-size: 40px;
}
#PokeName{
  color:rgba(0,212,255,1);
}
`

export const PokeImage = styled.img`
  width: 50px;
  height: 50px;
`
