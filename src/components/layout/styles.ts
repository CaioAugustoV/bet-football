import styled from "styled-components";

export const Cointain = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  > h1 {
    margin: 40px 0;
    color: ${({ theme }) => theme.colors.primary};
    user-select: none;
    > span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 20px;
    cursor: pointer;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    transition: 0.5s ease;
    :last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    :hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    > p {
      color: ${({ theme }) => theme.colors.white};
      margin-left: 15px;
      font-size: ${({ theme }) => theme.font.size.medium};
    }
  }
`;

export const IconHome = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  mask: url("/images/menu/home.svg") no-repeat center;
  width: 24px;
  height: 24px;
`;

export const IconTarget = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  mask: url("/images/menu/target.svg") no-repeat center;
  width: 24px;
  height: 24px;
`;

export const Main = styled.div`
  padding: 40px 20px;
  width: 100%;
`;

export const Footer = styled.span`
  position: absolute;
  bottom: 20px;
  padding: 0 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.medium};
  cursor: default;
  user-select: none;
  > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
