import React from "react";
import img1 from "../assets/black_final.png";
import img2 from "../assets/Hues-and-Cues.jpg";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const SaleSection: React.FC = () => {
  return (
    <Box p={{ base: "3", md: "12" }} mt={{ base: "12", md: "0" }} color="white">
      <Flex
        maxW="1024px"
        justifyContent="space-between"
        alignItems="center"
        gap="40px"
        m="0 auto"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
          width={{ base: "95%", md: "500px" }}
          bg="gray.800"
        >
          <Image
            src={img1}
            alt="Black Image"
            objectFit="cover" // Use cover for better fitting
            borderRadius="md"
            width="100%" // Make the image responsive
            height="100%" // Fill the Box
            maxHeight="250px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }} // Scale on hover
          />
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            py={6}
          >
            <Text fontWeight="600">Black november is coming..</Text>
            <Text my={1}>Massive deals you won't want to miss</Text>
            <Button
              variant="outline"
              borderRadius={24}
              color="white"
              border="1px solid white"
              mt={3}
              _hover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              }}
              transition="background-color 0.3s, border-color 0.3s"
            >
              Sign up now!
            </Button>
          </Flex>
        </Box>
        <Box
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
          width={{ base: "95%", md: "500px" }}
          bg="gray.800"
        >
          <Image
            src={img2}
            alt="Hues and Cues"
            objectFit="cover"
            borderRadius="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }} // Scale on hover
          />
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            py={6}
          >
            <Text fontWeight="600">Hues and cues</Text>
            <Text my={1}>Back in stock now</Text>
            <Button
              variant="outline"
              borderRadius={24}
              color="white"
              border="1px solid white"
              mt={3}
              _hover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              }}
              transition="background-color 0.3s, border-color 0.3s"
            >
              Buy now!
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SaleSection;
