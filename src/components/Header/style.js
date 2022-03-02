import styled from 'styled-components'

export const DisplayButton = styled.div`
  grid-column: 1/2;
  grid-row-start:1;
  margin: auto;
  cursor: pointer;
  .Back {
    margin: 0.1rem;
    width: 5rem;
    }
  @media (max-width: 768px) {
    display: flex;
    .BackButton {
      margin: 0;
      width: 5rem;
    }
  }
`

export const DisplayButton2 = styled.div`
  grid-column: 5/5;
  margin: auto;
  .Pokedex {
    left: 2rem;
    top: 3.3rem;
    width: 3rem;
    margin: 0.1rem;
    cursor: pointer;
    :hover {
      width: 4rem;
      box-shadow: 20px blue;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    img {
      margin: 0;
      width: 5rem;
    }
  }
`

// export const Container = styled.div`
//   flex-direction: column;
//   position: fixed;
//   width: 100%;
//   height: 12%;
//   padding: 0px 0px 90px;

// `

export const DisplayHeader = styled.div`
  z-index: 9001;
  background: #e00000;
  opacity: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  a {

    grid-column-start: 3;
    margin: auto; 
  }

  @media (max-width: 768px) {
    display: flex;
    width:100vw;
  }
`

export const ImagemPrincipalHeader = styled.img`
  width: 15rem;
  margin: 0 auto;
`
