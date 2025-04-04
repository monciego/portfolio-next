import styled from 'styled-components';

export const StyledTerminal = styled.div`
  background: linear-gradient(
    180.68deg,
    #aa14f0 -41.51%,
    rgba(0, 0, 0, 0) -41.51%,
    #aa14f0 -41.5%,
    rgba(170, 20, 240, 0.18) 6.77%,
    rgba(151, 60, 68, 0.055) 105.12%,
    rgba(160, 27, 222, 0.86) 105.13%
  );
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.firaCode};
  margin: 0 auto;
  height: 25rem;
  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: 5px;
  }

  &&::-webkit-scrollbar-track {
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      #4a3b51 -42.59%,
      #6c696d -42.59%,
      rgba(0, 0, 0, 0) -42.59%,
      #aa14f0 -42.58%,
      rgba(98, 89, 102, 0.18) 4.35%,
      rgba(151, 60, 68, 0.055) 99.99%,
      rgba(90, 87, 91, 0.86) 100%
    );
  }

  &&::-webkit-scrollbar-thumb {
    background: #3a194d;
    border-radius: 5px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 33rem;
  }
`;

export const TerminalHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #361a48;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px 5px 0px 0px;
  padding: 0.5rem 1rem;
  color: #d0d0d0;
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 0.7em;
  --val: 2.5vw;
  --max: 0.85em;
`;

export const TerminalButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
`;

export const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
`;

export const RedTerminalButton = styled(TerminalButton)`
  background-color: #f5544d;
`;

export const YellowTerminalButton = styled(TerminalButton)`
  background-color: #fabd2f;
`;

export const GreenTerminalButton = styled(TerminalButton)`
  background-color: #47d043;
`;

export const TerminalHeaderTitle = styled.div`
  text-align: center;
  flex: 1;
`;

export const TerminalHeaderLink = styled.a``;

export const TerminalInput = styled.input`
  color: #ffffff;
  font-family: inherit;
`;

export const TerminalContent = styled.div`
  z-index: 1;
  padding: 1rem;
  padding-bottom: 3rem;
  white-space: pre-line;
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1em;
`;

export const TextContainer = styled.div`
  margin-bottom: 0.85rem;
`;

export const YellowText = styled.span`
  color: #d5ac35;
`;

export const VioletText = styled.span`
  color: #6a77d2;
`;

export const BlueText = styled.span`
  color: #3eb9e7;
`;

export const GreenText = styled.span`
  color: #5ad786;
`;

export const Command = styled.dl`
  margin-bottom: 0.85rem;
`;

export const CommandTitle = styled.dd`
  color: #5ec2cd;
  margin-bottom: 0.25rem;
`;

export const CommandDescription = styled.dt`
  padding-left: 1rem;
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1em;
`;
