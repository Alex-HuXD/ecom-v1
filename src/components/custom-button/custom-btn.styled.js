import styled, { css } from "styled-components";

const btnStyle = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedBtnStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getBtnStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }

  return props.inverted ? invertedBtnStyle : btnStyle;
};

export const CustomBtnContainer = styled.button`
  min-width: 11rem;
  width: auto;
  height: 3.2rem;
  letter-spacing: 0.5px;
  line-height: 3.2rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  justify-content: center;

  ${getBtnStyles}
`;
