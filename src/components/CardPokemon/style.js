import styled from "styled-components";

export const PokeCardContainer = styled.div`
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 40px 0;
`;
export const Card = styled.div`
      position: relative;
      width: 250px;
      height: 250px;
      margin: 0 auto;
      background: none;
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

export const ImgContainer = styled.div`
  border: 1px black solid;
  margin: 10px;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  
  
  @media screen and (min-width: 768px)
    *, :after, :before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
`;

export const BorderImg = styled.div`
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,0.017542051000087544) 0%, rgba(20,117,153,0) 49%, rgba(249,0,0,1) 50%, rgba(255,255,255,0) 52%, rgba(242,238,255,0.009138689655549759) 82%);
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
    text-transform: capitalize;
  }
  :hover{
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,0.017542051000087544) 0%, rgba(20,117,153,0) 49%, rgba(68,249,0,1) 50%, rgba(255,255,255,0) 52%, rgba(242,238,255,0.009138689655549759) 82%);
  }
`;

export const PokeImg = styled.img`
  margin-top: 10px;
  width: 100px;
`;

export const ButtonsContainer = styled.div`
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
button {
 position: relative;
 margin: auto;
 padding: 12px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

button:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #ffcb05;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

button span {
 position: relative;
 font-family: 'Bungee Inline', cursive;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: red;
    :hover {
      color:#ffcb05;
    }
}

button svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

button:hover:before {
 width: 100%;
 background: #316ab2;
}

button:hover svg {
 transform: translateX(0);
}

button:active {
 transform: scale(0.95);
}
`;

export const NameContainer = styled.div`
  border: none !important;
  color: red;
  font-family: 'Bungee Inline', cursive;
  font-size:15px;
  text-align: center;
  text-transform: capitalize;
  :hover{
    color: #56EA65;
  }
  `