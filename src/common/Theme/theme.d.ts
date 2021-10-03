import "styled-components";
import { Themes } from "./schema";
declare module "styled-components" {
  interface MultipleColorScheme {
    primary: string;
    secondary: string;
    tertiary?: string;
  }

  type SingleColorScheme = string;

  interface ColorProperties<T = MultipleColorScheme> {
    color: T;
    backgroundColor: T;
  }

  interface ButtonScheme {
    default: ColorProperties<SingleColorScheme>;
    success: ColorProperties<SingleColorScheme>;
    danger: ColorProperties<SingleColorScheme>;
  }

  interface BorderScheme {
    default: "1px solid";
    color: SingleColorScheme;
  }

  export interface DefaultTheme {
    name: Themes;
    header: ColorProperties;
    content: ColorProperties;
    footer: ColorProperties;
    buttons: ButtonScheme;
    borders: BorderScheme;
  }
}
