import * as Styles from "./styles";
import { IProps } from "./types";

const Input: React.FC<IProps> = () => {
  return (
    <Styles.Cointain>
      <Styles.Label>Time da Casa</Styles.Label>
      <Styles.Input />
    </Styles.Cointain>
  );
};

export default Input;
