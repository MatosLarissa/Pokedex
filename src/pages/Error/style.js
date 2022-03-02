import styled from "styled-components";

export const ContainerAll = styled.div`
    flex-direction: column;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    overflow-x: hidden;
  }

`;

export const InfoContainer = styled.main`
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 15px;
    margin-top: 60px;
    height: 85vh;
    width: 70vw;
    justify-content: center
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    background: rgb(34,97,195);
    background: linear-gradient(0deg, rgba(34,97,195,0.4937325271905637) 0%, rgba(166,45,253,0.5049370089832808) 100%);
    p{
        margin: 0px 0px 10px;
        font-size:25px;
    }
    button {
        margin: 10px 0px 0px;
        --glow-color: rgb(217, 176, 255);
        --glow-spread-color: rgba(191, 123, 255, 0.781);
        --enhanced-glow-color: rgb(231, 206, 255);
        --btn-color: rgb(100, 61, 136);
        border: .25em solid var(--glow-color);
        padding: 1em 3em;
        color: var(--glow-color);
        font-size: 15px;
        font-weight: bold;
        background-color: var(--btn-color);
        border-radius: 1em;
        outline: none;
        box-shadow: 0 0 1em .25em var(--glow-color),
                0 0 4em 1em var(--glow-spread-color),
                inset 0 0 .75em .25em var(--glow-color);
        text-shadow: 0 0 .5em var(--glow-color);
        position: relative;
        transition: all 0.3s;
        }

        button::after {
        pointer-events: none;
        content: "";
        position: absolute;
        top: 120%;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--glow-spread-color);
        filter: blur(2em);
        opacity: .7;
        transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
        }

        button:hover {
        color: var(--btn-color);
        background-color: var(--glow-color);
        box-shadow: 0 0 1em .25em var(--glow-color),
                0 0 4em 2em var(--glow-spread-color),
                inset 0 0 .75em .25em var(--glow-color);
        }

        button:active {
        box-shadow: 0 0 0.6em .25em var(--glow-color),
                0 0 2.5em 2em var(--glow-spread-color),
                inset 0 0 .5em .25em var(--glow-color);
        }
`;

export const Img = styled.img`
    width: 25vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 35vw;
        margin-top: 50%;
    }
`;