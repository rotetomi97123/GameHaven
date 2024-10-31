import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Spinner,
  Alert,
  Tooltip,
  Button,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

type CategoryItem = {
  name: string;
  image: string;
  description: string;
  price: any;
};

const Category: React.FC = () => {
  const categoryTitle = useLocation().state.category;
  const [categoryData, setCategoryData] = useState<CategoryItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost/board_game_api/get_games.php"
        );
        const data = await response.json();

        if (categoryTitle === "Board games") {
          setCategoryData(data.games);
        } else if (categoryTitle === "Trading cards") {
          setCategoryData(data.cards);
        } else {
          throw new Error("Categories not found");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categoryTitle]);

  if (loading) return <Spinner size="xl" color="teal.500" />;
  if (error) return <Alert status="error">{error}</Alert>;

  return (
    <Box bg="darkGray" fontFamily="heading" minH="100vh">
      <Navbar />
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="teal.400"
        my={6}
        textAlign="center"
      >
        {categoryTitle}
      </Text>
      <Box maxW="1180px" margin="50px auto">
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={8}
          px={{ base: 4, xl: 2 }}
        >
          {categoryData &&
            categoryData.map((item, index) => (
              <GridItem
                key={index}
                bg="gray.800"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                transition="0.3s"
                display="flex"
                flexDirection="column"
                _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
              >
                <Link
                  to={`/product/${item.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()
                    .replace(/-+$/, "")}`}
                  state={{ item }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    objectFit="cover"
                    w="100%"
                    h="200px"
                    borderBottom="4px solid teal.300"
                    cursor="pointer"
                  />
                </Link>
                <Box
                  p={5}
                  display="flex"
                  flexDirection="column"
                  flexGrow={1}
                  justifyContent="space-between"
                >
                  <Text fontSize="xl" fontWeight="bold" color="white" mb={2}>
                    {item.name}
                  </Text>
                  <Flex gap={1}>
                    <Text fontSize="lg" fontWeight="semibold" color="white">
                      ${parseFloat(item.price).toFixed(2)}
                    </Text>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                      textDecor="line-through"
                    >
                      ${(parseFloat(item.price) + 10).toFixed(2)}
                    </Text>
                  </Flex>
                  <Box>
                    <Tooltip aria-label="Add to Cart Tooltip">
                      <Button
                        leftIcon={<AiOutlineShoppingCart />}
                        variant="solid"
                        colorScheme="teal"
                        size={{ base: "sm", md: "md" }}
                        bg="teal.400"
                        color="white"
                        _hover={{
                          backgroundColor: "teal.300",
                          boxShadow: "md",
                        }}
                        transition="background-color 0.3s, box-shadow 0.3s"
                        fontSize="lg"
                        width="100%"
                        mb={2} // Space between the two buttons
                      >
                        ADD TO CART
                      </Button>
                    </Tooltip>
                    <Tooltip aria-label="Stock Status Tooltip">
                      <Button
                        variant="outline"
                        colorScheme="teal"
                        size={{ base: "sm", md: "md" }}
                        bg="gray.600"
                        color="white"
                        _hover={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderColor: "teal.300",
                        }}
                        transition="background-color 0.3s, border-color 0.3s"
                        fontSize="lg"
                        cursor="default"
                        width="100%"
                      >
                        3+ IN STOCK
                      </Button>
                    </Tooltip>
                  </Box>
                </Box>
              </GridItem>
            ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Category;
