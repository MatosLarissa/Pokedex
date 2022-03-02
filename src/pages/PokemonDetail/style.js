import styled from "styled-components";

export const ContainerAll = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  padding: 90px 0px 0px;
  @media (max-width: 768px) {
    overflow-x: hidden;
    padding: 10px;
  }
`;

export const PokeInfosContainer = styled.main`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 15px;
  width: 70vw;
  height: 85vh;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  background: rgb(34,97,195);
  background: linear-gradient(0deg, rgba(34,97,195,0.4937325271905637) 0%, rgba(166,45,253,0.5049370089832808) 100%);

  h3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0 10px 0;
    padding: 10px 0px 0px 0px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-top: 20%;
    overflow-x: hidden;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
`;

export const Powers = styled.div`
     width: 15vw;

 @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 3px 30px 15px;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
 }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px;  
  margin-right:10px;  
  img {
    
    height: 300px;
    width: 300px;
    text-align: center;
    padding: 0px;
    margin-left: 30px;
    margin-top: 32px;   
  }
  @media (max-width: 768px) {
    Text{
      font-size:10px;
    }
    width: auto;
    height: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0px 15px;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }
`;

export const ImgWrapper = styled.img`
  height: 35vh;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  width: 15vw;
  border-radius: 15px;

  @media (max-width: 768px) {
    padding-top: 2rem;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin-top: 40px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled.h1`
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

export const Attacks = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px 0px 0px;
    align-items: center;
  @media (max-width: 768px) {
    padding-top: 2rem;
    padding: 15px 0px 50px 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Load = styled.img`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px;  
  margin-right:10px; 
`;
