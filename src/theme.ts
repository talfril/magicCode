import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#1c1c1c",
      paper: "#abdbcd",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
    primary: {
      main: "#5CCDC9",
    },
    secondary: {
      main: "#006561",
    },
  },
  typography: {
    fontFamily: "AmaticSC-Regular, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
          color: "var(--font-color)",
        },
        "*": {
          boxSizing: "border-box",
        },
        "*::before": {
          boxSizing: "border-box",
        },
        "*::after": {
          boxSizing: "border-box",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
        p: {
          margin: "0",
          padding: "0",
        },
        ul: {
          margin: "0",
          padding: "0",
          listStyle: "none",
        },
        ol: {
          margin: "0",
          padding: "0",
          listStyle: "none",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        img: {
          width: "100%",
        },
        address: {
          fontStyle: "normal",
        },
        button: {
          fontStyle: "normal",
          outline: "none",
          border: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#4d4d4d",
          background: "#1c1c1c",
          padding: "5px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: "#006561", 
          },
          "& .MuiSelect-select": {
            color: "#ffffff", 
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#006561", 
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: "1px", 
          borderColor: "#006561", 
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#000000", 
        },
      },
    },
  },
});
