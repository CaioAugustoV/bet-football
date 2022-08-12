import styled from "styled-components";

export const Cointain = styled.div``;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 250px;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 16px;
  transition: 0.5s ease;
  color: ${({ theme }) => theme.colors.primary};
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
