import type { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  color: blue;
`;

const IndexPage: NextPage = () => {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  );
};

export default IndexPage;
