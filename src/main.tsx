import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext.tsx";

const theme = extendTheme({
  colors: {
    darkGray: "#1A1A1A",
    primaryColor: "#009688",
    grayColor: "#323232",
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
