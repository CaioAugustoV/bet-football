import * as Styles from "./styles";
import { IProps } from "./types";
import Input from "@components/input";

const Header: React.FC<IProps> = ({}) => {
  return (
    <Styles.Cointain>
      <Styles.Head>
        <Input label="Time da Casa" value="" onChangeValue={() => {}} />
        <Styles.Box>Último Jogo</Styles.Box>
        <Input label="Time de Fora" value="" onChangeValue={() => {}} />
      </Styles.Head>
      <Styles.Teams>
        <Styles.ContainTeam>
          <Styles.Team>
            <img src="https://media.api-sports.io/football/teams/33.png" />
          </Styles.Team>
          <span>3</span>
        </Styles.ContainTeam>
        <Styles.Versus>X</Styles.Versus>
        <Styles.ContainTeam>
          <span>2</span>
          <Styles.Team>
            <img src="https://media.api-sports.io/football/teams/33.png" />
          </Styles.Team>
        </Styles.ContainTeam>
      </Styles.Teams>
    </Styles.Cointain>
  );
};

export default Header;
