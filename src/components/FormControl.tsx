import React from 'react';
import styled from 'styled-components';

type FormControlProps = {
  label?: string;
  error?: boolean;
  helperText?: string;
  children: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #374151;
`;

const Helper = styled.span<{ error?: boolean }>`
  font-size: 0.75rem;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
`;

const FormControl: React.FC<FormControlProps> = ({ label, error, helperText, children }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    {children}
    {helperText && <Helper error={error}>{helperText}</Helper>}
  </Wrapper>
);

export default FormControl;
