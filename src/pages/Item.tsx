import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Badge,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Item: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const item = useLocation().state.game;

  return (
    <Box bg="#1A1A1A" color="white" fontFamily="heading" minHeight="100vh">
      <Navbar />
      <Box maxWidth="800px" mx="auto" p={6}>
        <HStack spacing={6} mt={8} align="flex-start">
          <Box
            position="relative"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
          >
            <Image
              src={item.image}
              alt={item.name}
              borderRadius="md"
              boxSize="300px"
            />
          </Box>
          <Stack spacing={4} flex="1">
            <Heading size="lg">{item.name}</Heading>
            <Badge colorScheme="teal">{item.category}</Badge>

            <HStack spacing={2}>
              {/* Rating Display */}
              {[...Array(5)].map((_, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  color={index < 4 ? "yellow.400" : "gray.500"}
                >
                  ★
                </Text>
              ))}
            </HStack>

            <Text fontSize="lg">Playtime: {item.playtime} minutes</Text>
            <Text fontSize="lg">
              Players: {item.player_count_min} - {item.player_count_max}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Price: ${item.price}{" "}
              {item.salePrice && (
                <Text as="span" textDecoration="line-through" color="gray.500">
                  ${item.salePrice}
                </Text>
              )}
            </Text>
            <Text fontSize="md" textAlign="left">
              {item.description}
            </Text>

            <Button
              colorScheme="teal"
              mt={4}
              isDisabled={item.stock <= 0} // Disable button if out of stock
            >
              Add to Cart
            </Button>

            {/* Accordion for Additional Details */}
            <Accordion allowToggle mt={6}>
              <AccordionItem>
                <AccordionButton onClick={onToggle}>
                  <Box flex="1" textAlign="left">
                    More Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text fontSize="md">
                    {/* Replace this with actual additional details */}
                    {item.additionalDetails ||
                      "No additional details available."}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Item;
