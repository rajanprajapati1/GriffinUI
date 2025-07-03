import React from 'react';
import styled, { css } from 'styled-components';

type Variant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle1' | 'subtitle2'
  | 'body1' | 'body2'
  | 'caption' | 'overline';

type Align = 'left' | 'right' | 'center' | 'justify' | 'inherit';

interface BaseProps {
  variant?: Variant;
  align?: Align;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  color?: string;
  children: React.ReactNode;
}

type TexturaProps<T extends React.ElementType = 'p'> = BaseProps & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseProps>;

const variantStyles = {
  h1: css`font-size: 2.5rem; font-weight: 700; line-height: 1.2;`,
  h2: css`font-size: 2rem; font-weight: 600; line-height: 1.3;`,
  h3: css`font-size: 1.75rem; font-weight: 600; line-height: 1.35;`,
  h4: css`font-size: 1.5rem; font-weight: 500; line-height: 1.4;`,
  h5: css`font-size: 1.25rem; font-weight: 500; line-height: 1.5;`,
  h6: css`font-size: 1rem; font-weight: 500; line-height: 1.6;`,
  subtitle1: css`font-size: 1rem; font-weight: 400;`,
  subtitle2: css`font-size: 0.875rem; font-weight: 400;`,
  body1: css`font-size: 1rem; font-weight: 400;`,
  body2: css`font-size: 0.875rem; font-weight: 400;`,
  caption: css`font-size: 0.75rem; font-weight: 400;`,
  overline: css`font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;`
};

const StyledTextura = styled.p<BaseProps>`
  margin: 0;
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'inherit'};
  ${({ variant }) => variant && variantStyles[variant]}
  ${({ gutterBottom }) => gutterBottom && css`margin-bottom: 0.35em;`}
  ${({ noWrap }) => noWrap && css`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`}
  ${({ paragraph }) => paragraph && css`margin-bottom: 1em;`}
`;

const Textura = <T extends React.ElementType = 'p'>({
  as,
  children,
  ...props
}: TexturaProps<T>) => {
  return (
    <StyledTextura as={as} {...props}>
      {children}
    </StyledTextura>
  );
};

export default Textura;
