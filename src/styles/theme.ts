import { extendTheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme<Theme>({
  colors: {
    text: {
      "900": "#47585B",
      "500": "#DADADA",
      "100": "#F5F8FA",
    },
    highlight: {
      "900": "#FFBA08",
      "50": "rgba(255, 186, 8, 0.5)",
    },
    info: {
      "900": "#999999",
      "50": "rgba(153, 153, 153, 0.5)",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'text.100',
        color: 'text.900',
      }
    }
  }
});