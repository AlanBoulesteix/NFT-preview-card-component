import styled from "styled-components";

export const CardsWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
height: 100vh;
width: 90vw;
overflow: auto;
gap: 2.5em;

@media (max-width: 425px) {
  flex-wrap: nowrap;
  flex-direction: column;
}
`;