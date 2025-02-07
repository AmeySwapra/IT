import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const theme = extendTheme({
  fonts: {
    heading: "'Alice', serif",
    body: "'Alice', serif",
  },
  colors: {
    bg: "#F8F9FA",
    text: "#881fc5",
    primary: "#007BFF",
    secondary: "#6C757D",
    hover: "#0056b3",
    white: "#FFFFFF",
  },
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ChakraProvider>
  </StrictMode>
);
