import React from 'react';
import styled from 'styled-components';

export interface IButtonProps {
  children?: React.ReactNode | undefined;
  href: string;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  href,
}) => {
  return <StyledButton href={href}>{children}</StyledButton>;
};
const StyledButton = styled.a`
  --min: 1em;
  --val: 3vw;
  --max: 1.5em;
  margin: 0.85rem;
  padding: 0.8rem 5.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.inter};
  color: rgba(255, 255, 255, 0.9);
  background: linear-gradient(
    93.48deg,
    #4365dd 16.75%,
    rgba(96, 49, 198, 0.95) 52.87%
  );
  font-weight: 500;
  box-shadow: 0px 8px 10px rgba(185, 188, 215, 25%);
  border-radius: 2px;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: rgba(255, 255, 255, 1);
    box-shadow: 0px 15px 35px rgba(145, 92, 182, 0.4);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem 2.5rem;
  }
`;
