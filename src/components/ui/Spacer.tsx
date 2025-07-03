import React from 'react';
import styled from 'styled-components';

const SpacerBox = styled.div<{ height?: string }>`
  height: ${(props) => props.height || '1rem'};
`;

 const Spacer: React.FC<{ height?: string }> = ({ height }) => {
  return <SpacerBox height={height} />;
};


export default Spacer;