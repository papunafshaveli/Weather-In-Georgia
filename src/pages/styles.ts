import styled from "styled-components";

export const CityContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 1rem;
  img {
    width: 10rem;
    height: 10rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  p {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`;

export const CityNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  background-color: aqua;
`;
