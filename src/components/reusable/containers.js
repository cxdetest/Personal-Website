import styled from 'styled-components';

/* Containers */
export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 55px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 30px;
    flex-flow: column wrap;
    text-align: center;
  }
`;

export const MediumContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-flow: column wrap;
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 80%;
  margin: auto;
`;

export const FlexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: 70%;
  margin: auto;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;
