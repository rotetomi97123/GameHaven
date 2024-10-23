import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
  colors: {
    darkGray: "#1A1A1A",
    primaryColor: "#009688",
  },
  fonts: {
    heading: `'Caveat', sans-serif`,
    body: `'Caveat', sans-serif`,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
