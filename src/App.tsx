import React from "react";
import GameList from "./components/Gamelist"; // Importáld a GameList komponenst
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Box bg="darkGray">
      <Navbar />
      <h1>Board Game Database</h1>

      <GameList />
    </Box>
  );
};

export default App;
