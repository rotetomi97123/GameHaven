import React from "react";
import GameList from "./components/Gamelist"; // Importáld a GameList komponenst
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";

const App: React.FC = () => {
  return (
    <Box bg="darkGray" fontFamily="heading">
      <Navbar />
      <Hero />
      <Box height="100vh" bg="darkGray"></Box>
      <h1>Board Game Database</h1>

      {/* <GameList /> */}
    </Box>
  );
};

export default App;
