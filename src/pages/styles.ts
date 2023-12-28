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

export const CityNameContainer = styled.div<{ themes: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0.5rem 1rem;
  background-color: ${({ themes }) =>
    themes ? " hsla(9, 100%, 64%, 0.2)" : " hsl(0, 0%, 47%)"};
`;
