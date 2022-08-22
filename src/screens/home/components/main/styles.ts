import styled from "styled-components";

export const Cointain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Box = styled.div`
  width: 250px;
  padding: 20px 10px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  > p {
    margin-bottom: 10px;
    > span {
      font-weight: bold;
    }
  }
`;
