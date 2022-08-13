export interface IProps {
  label: string;
  value: string;
  onChangeValue(str: string): void;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
}
