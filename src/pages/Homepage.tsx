import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import SaleSection from "../components/saleSection";
import GameList from "../components/Gamelist";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <Box bg="darkGray" fontFamily="heading">
      <Navbar />
      <Hero />
      <SaleSection />
      <GameList />
      <Footer />
      <Box height="10vh" bg="darkGray"></Box>
    </Box>
  );
};

export default App;
