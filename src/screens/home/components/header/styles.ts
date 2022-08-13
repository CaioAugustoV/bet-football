import styled from "styled-components";

export const Cointain = styled.div`
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.large};
`;

export const Teams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ContainTeam = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-size: 100px;
    margin: 0 20px;
  }
`;

export const Team = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: 140px;
    height: 140px;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const Versus = styled.div`
  font-size: 100px;
`;
