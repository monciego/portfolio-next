import React from 'react';
import styled, { css } from 'styled-components';

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

export const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.25rem 0 1rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: row;
  }
`;

interface IActionButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export const ActionButton: React.FunctionComponent<IActionButtonProps> = ({
  children,
  href,
  variant = 'primary',
}) => {
  return (
    <StyledActionButton href={href} $variant={variant}>
      {children}
    </StyledActionButton>
  );
};

const StyledActionButton = styled.a<{
  $variant: 'primary' | 'secondary';
}>`
  --color-brand: #2f6cff;
  --color-brand-hi: #4c87ff;
  display: inline-flex;
  font-size: clamp(0.8rem, 1vw, 0.9375rem);
  letter-spacing: -0.025em;
  align-items: center;
  gap: 0.25rem;
  padding: 0.625rem 0.95rem;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  text-decoration: none;

  transition:
    transform 120ms ease,
    box-shadow 200ms ease,
    background 200ms ease,
    border-color 200ms ease;

  &:active {
    transform: translateY(0.5px);
  }

  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      color: #ffffff;

      background:
        linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.18) 0%,
          rgba(255, 255, 255, 0) 35%
        ),
        linear-gradient(
          180deg,
          var(--color-brand-hi) 0%,
          var(--color-brand) 100%
        );

      border: 1px solid rgba(255, 255, 255, 0.08);

      box-shadow:
        0 1px 0 0 rgba(255, 255, 255, 0.18) inset,
        0 8px 24px -8px rgba(47, 108, 255, 0.65),
        0 0 0 1px rgba(47, 108, 255, 0.35);

      &:hover {
        background:
          linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.22) 0%,
            rgba(255, 255, 255, 0) 35%
          ),
          linear-gradient(180deg, #6098ff 0%, #3675ff 100%);

        box-shadow:
          0 1px 0 0 rgba(255, 255, 255, 0.22) inset,
          0 10px 28px -6px rgba(47, 108, 255, 0.75),
          0 0 0 1px rgba(47, 108, 255, 0.45);
      }
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background: linear-gradient(180deg, #1c1c1c 0%, #333333 100%);

      border: 1px solid var(--color-border);

      box-shadow:
        0 1px 0 0 rgba(255, 255, 255, 0.04) inset,
        0 8px 24px -16px rgba(0, 0, 0, 0.8);

      &:hover {
        border-color: #3a3a3a;
        background: linear-gradient(180deg, #232323 0%, #181818 100%);
      }
    `}

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem 0.75rem;
  }
`;

export const ActionButtonChip = styled.span<{
  $variant?: 'primary' | 'secondary';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  margin-left: 0.6rem;
  padding: 0 6px;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.02em;

  ${({ $variant = 'primary' }) =>
    $variant === 'primary'
      ? css`
          color: #ffffff;
          background: rgba(0, 0, 0, 0.22);

          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.18) inset,
            0 0 0 1px rgba(0, 0, 0, 0.18);
        `
      : css`
          color: var(--color-foreground);
          background: #050505;

          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.05) inset,
            0 0 0 1px var(--color-border);
        `}
`;
