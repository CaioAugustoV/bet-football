import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      green: string;
      waring: string;
      red: string;
      white: string;
      background: string;
    };
  }
}
