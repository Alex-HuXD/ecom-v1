import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../assets/H_logo.png";

export const HeaderContainer = styled.div`
  display: flex;
  height: 5rem;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const LogoContainer = styled(Link)`
  height: 5rem;
  width: 5rem;
`;

export const LogoIcon = styled.div`
  height: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 0.7rem 0.9rem;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  margin: 0.6rem 0;

  @media (max-width: 690px) {
    display: none;
  }
`;
