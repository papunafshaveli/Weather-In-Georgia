import { HeaderContainer, StyledNavLink } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledNavLink to="/tbilisi">Tbilisi</StyledNavLink>
      <StyledNavLink to="/batumi">Batumi</StyledNavLink>
      <StyledNavLink to="/kutaisi">Kutaisi</StyledNavLink>
      <StyledNavLink to="/zugdidi">Zugdidi</StyledNavLink>
      <StyledNavLink to="/gori">Gori</StyledNavLink>
      <StyledNavLink to="/ninotsminda">Ninotsminda</StyledNavLink>
      <StyledNavLink to="/sagarejo">Sagarejo</StyledNavLink>
      <StyledNavLink to="/rustavi">Rustavi</StyledNavLink>
      <StyledNavLink to="/tianeti">Tianeti</StyledNavLink>
    </HeaderContainer>
  );
};

export default Header;
