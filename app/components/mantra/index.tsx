import React from 'react';
import { Parallax } from 'react-parallax';
import { MantraContainer, MantraText } from './mantra.styles';

export interface IMantraProps {}

export const Mantra: React.FunctionComponent<IMantraProps> = () => {
  return (
    <Parallax
      className="parallax"
      bgImage="/images/mantra/mantra-background.jpg"
      strength={-200}
      style={{ width: '100%' }}
    >
      <MantraContainer>
        <MantraText>
          Success comes to <br />
          those who dare to begin.
        </MantraText>
      </MantraContainer>
    </Parallax>
  );
};
