import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 5rem;
  width: 100%;
`;

export const FooterText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: darkgray;
  text-align: center;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  a {
    font-size: 2rem;
    text-decoration: none;
    color: black;
  }
`;
