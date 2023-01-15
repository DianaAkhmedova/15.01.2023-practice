import styled from 'styled-components';

export const NameText = styled.p`
  font-size: 14px;
  color: red;

  &:hover {
    background: chartreuse;
  }
`;

export const EmailText = styled.p`
  font-size: 20px;
  color: blue;

  &:hover {
    background: deeppink;
  }
`;

export const SpanText = styled.span`
  background: ${({ isRed }) => (isRed ? 'red' : 'yellow')};
  color: #ffffff;

  ${NameText}:hover & {
    color: #000000;
  }
`;
