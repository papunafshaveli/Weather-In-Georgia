import { HeaderContainer, StyledNavLink } from "./styles";

type HeaderProps = {
  themes: boolean;
};

const Header: React.FC<HeaderProps> = ({ themes }) => {
  return (
    <HeaderContainer themes={themes}>
      <StyledNavLink themes={themes} to="/tbilisi">
        Tbilisi
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/batumi">
        Batumi
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/kutaisi">
        Kutaisi
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/zugdidi">
        Zugdidi
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/gori">
        Gori
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/ninotsminda">
        Ninotsminda
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/sagarejo">
        Sagarejo
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/rustavi">
        Rustavi
      </StyledNavLink>
      <StyledNavLink themes={themes} to="/tianeti">
        Tianeti
      </StyledNavLink>
    </HeaderContainer>
  );
};

export default Header;
