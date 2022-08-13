import * as Styles from "./styles";
import { IProps } from "./types";

const Input: React.FC<IProps> = ({
  label,
  value,
  onChangeValue = () => {},
  onBlur = () => {},
  onFocus = () => {},
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };

  return (
    <Styles.Cointain>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Styles.Cointain>
  );
};

export default Input;
