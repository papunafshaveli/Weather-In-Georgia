import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div<{ themes: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;

  padding: 2rem;

  width: 100%;
  min-height: 100px;

  background-image: ${({ themes }) =>
    themes ? `url("/background-day.jpg")` : `url("/background-dark.jpg")`};

  background-repeat: no-repeat;
  background-size: cover;
  font-size: 1rem;

  @media (max-width: 800px) {
    display: grid;
    grid-template-rows: 15px 15px 15px;
    grid-template-columns: 15px 15px 15px;
    justify-items: center;
    grid-row-gap: 1rem;
  }
`;

export const StyledNavLink = styled(NavLink)<{ themes: boolean }>`
  font-weight: 700;

  color: ${({ themes }) => (themes ? "black" : "white")};

  text-decoration: none;

  cursor: pointer;
`;
