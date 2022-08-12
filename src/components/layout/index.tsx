import * as Styles from "@components/layout/styles";
import { IProps } from "@components/layout/types";

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Styles.Cointain>
      <Styles.Menu>
        <Styles.Footer>
          ©2022 - <span>BetFootball</span> | All rights reserved
        </Styles.Footer>
        <h1>
          <span>Bet</span>Football
        </h1>
        <div>
          <Styles.IconHome />
          <p>Dashboard</p>
        </div>
        <div>
          <Styles.IconTarget />
          <p>Calculadora Esportiva</p>
        </div>
      </Styles.Menu>
      <Styles.Main>{children}</Styles.Main>
    </Styles.Cointain>
  );
};

export default Layout;
