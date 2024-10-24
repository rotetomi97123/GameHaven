import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Item: React.FC = () => {
  return (
    <Box bg="darkGray" fontFamily="heading">
      <Navbar />
    </Box>
  );
};

export default Item;
