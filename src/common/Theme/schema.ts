import { DefaultTheme } from "styled-components";

enum Themes {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

type ThemeSchema = {
  [Themes.LIGHT]: DefaultTheme;
  [Themes.DARK]: DefaultTheme;
};

const schema: ThemeSchema = {
  DARK: {
    name: Themes.DARK,
    header: {
      color: {
        primary: "#fff",
        secondary: "#cdd7df",
      },
      backgroundColor: {
        primary: "#073763",
        secondary: "#04213b",
      },
    },
    content: {
      color: {
        primary: "#fff",
        secondary: "#cdd7df",
      },
      backgroundColor: {
        primary: "#1f4b72",
        secondary: "#1b4366",
      },
    },
    footer: {
      color: {
        primary: "#fff",
        secondary: "#cdd7df",
      },
      backgroundColor: {
        primary: "#073763",
        secondary: "#04213b",
      },
    },
    borders: {
      default: "1px solid",
      color: "#fff",
    },
    buttons: {
      default: {
        color: "#fff",
        backgroundColor: "#fff",
      },
      success: {
        color: "#fff",
        backgroundColor: "#076361",
      },
      danger: {
        color: "#fff",
        backgroundColor: "#630709",
      },
    },
  },
  LIGHT: {
    name: Themes.LIGHT,
    header: {
      color: {
        primary: "#000",
        secondary: "#073763",
      },
      backgroundColor: {
        primary: "f2f2f2f2",
        secondary: "#d9d9d9",
      },
    },
    content: {
      color: {
        primary: "#000",
        secondary: "#073763",
      },
      backgroundColor: {
        primary: "#f9f9f9",
        secondary: "#f5f5f5",
      },
    },
    footer: {
      color: {
        primary: "#000",
        secondary: "#073763",
      },
      backgroundColor: {
        primary: "#073763",
        secondary: "#04213b",
      },
    },
    borders: {
      default: "1px solid",
      color: "#fff",
    },
    buttons: {
      default: {
        color: "#fff",
        backgroundColor: "#cdd7df",
      },
      success: {
        color: "#fff",
        backgroundColor: "#076361",
      },
      danger: {
        color: "#fff",
        backgroundColor: "#630709",
      },
    },
  },
};

export { schema, Themes };
export type { ThemeSchema };
