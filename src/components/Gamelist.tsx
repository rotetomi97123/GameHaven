import React, { useEffect, useState } from "react";
import {
  Image,
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineClockCircle } from "react-icons/ai";
import { GiTrophy, GiDiceTwentyFacesOne } from "react-icons/gi";
import { Link } from "react-router-dom";

const GameList: React.FC = () => {
  const [gameKey, setGameKey] = useState<string>("games");
  const [product, setProduct] = useState<{ [key: string]: any[] }>({
    games: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showTop10, setShowTop10] = useState<boolean>(false);
  const [showTop100, setShowTop100] = useState<boolean>(false);
  const [showPreOrder, setShowPreOrder] = useState<boolean>(false);

  const [categoryBorder, setCategoryBorder] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "http://localhost/board_game_api/get_games.php"
        );
        if (!response.ok) {
          throw new Error("Hiba történt a játékok lekérése során");
        }
        const data = await response.json();

        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Töltés...</p>;
  if (error) return <p>Hiba: {error}</p>;

  const maxLength = 20;

  const truncate = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // Determine which games to show

  const filteredGames = product[gameKey]
    ?.filter((game) => {
      if (showTop10) return game.isTOP10;
      if (showTop100) return game.isTOP100;
      if (showPreOrder) return game.isPREORDER;
      return true; // Return all games if none of the filters are active
    })
    .slice(0, 10);
  return (
    <Box mt={{ base: 10, lg: 0 }}>
      <Flex
        bg="grayColor"
        color="white"
        maxWidth="1024px"
        m="0 auto"
        borderRadius="md"
        justifyContent={{ base: "center", sm: "space-between" }}
      >
        <Text
          display={{ base: "none", sm: "block" }}
          py={{ base: 2, sm: 4 }}
          px={{ base: 1, sm: 4 }}
        >
          Latest charts
        </Text>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          width={{ base: "100%", md: "unset" }}
        >
          <Box
            height="100%"
            borderLeft={{ base: "0", sm: "1px" }}
            borderRight={{ base: "0", sm: "1px" }}
            px={{ base: 1, sm: 4 }}
            py={{ base: 2, sm: 4 }}
            cursor="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            gap={1}
            onClick={() => {
              setGameKey("games");
              setShowTop10(!showTop10);
              setShowTop100(false);
              setShowPreOrder(false);
              setCategoryBorder(categoryBorder === "TOP10" ? null : "TOP10");
            }}
            bg={categoryBorder === "TOP10" ? "primaryColor" : "transparent"}
          >
            <GiTrophy size={20} color="white" /> TOP10
            <Flex
              position="absolute"
              bottom="-7px"
              left="50%"
              transform="translateX(-50%)"
              width={0}
              height={0}
              borderLeft="10px solid transparent"
              borderRight="10px solid transparent"
              borderTop="10px solid #009688"
              display={categoryBorder === "TOP10" ? "flex" : "none"}
            />
          </Box>
          <Box
            height="100%"
            borderRight={{ base: "0", sm: "1px" }}
            px={{ base: 1, sm: 4 }}
            cursor="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            py={{ base: 2, sm: 0 }}
            bg={categoryBorder === "PREORDER" ? "primaryColor" : "transparent"}
            position="relative"
            onClick={() => (
              setGameKey("games"),
              setShowTop10(false),
              setShowTop100(false),
              setCategoryBorder(
                categoryBorder === "PREORDER" ? null : "PREORDER"
              ),
              setShowPreOrder(!showPreOrder)
            )}
          >
            <AiOutlineClockCircle size={20} color="white" /> Pre-Order
            <Flex
              position="absolute"
              bottom="-7px"
              left="50%"
              transform="translateX(-50%)"
              width={0}
              height={0}
              borderLeft="10px solid transparent"
              borderRight="10px solid transparent"
              borderTop="10px solid #009688"
              display={categoryBorder === "PREORDER" ? "flex" : "none"}
            />
          </Box>
          <Box
            borderRight={{ base: "0", sm: "1px" }}
            height="100%"
            px={{ base: 1, sm: 4 }}
            cursor="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            gap={1}
            py={{ base: 2, sm: 0 }}
            bg={categoryBorder === "TOP100" ? "primaryColor" : "transparent"}
            onClick={() => {
              setGameKey("games");
              setShowTop10(false);
              setShowTop100(!showTop100);
              setShowPreOrder(false);
              setCategoryBorder(categoryBorder === "TOP100" ? null : "TOP100");
            }}
          >
            <GiDiceTwentyFacesOne size={20} color="white" /> BGG Top 100
            <Flex
              position="absolute"
              bottom="-7px"
              left="50%"
              transform="translateX(-50%)"
              width={0}
              height={0}
              borderLeft="10px solid transparent"
              borderRight="10px solid transparent"
              borderTop="10px solid #009688"
              display={categoryBorder === "TOP100" ? "flex" : "none"}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex maxWidth="1024px" m="0 auto" color="white">
        <Flex
          w="50%"
          justifyContent="center"
          py={3}
          position="relative"
          onClick={() => setGameKey("games")}
          cursor="pointer"
          borderBottom={gameKey === "games" ? "4px" : "none"}
          borderColor="primaryColor"
        >
          <Text>Board games</Text>
          <Flex
            position="absolute"
            bottom="-10px"
            left="50%"
            transform="translateX(-50%)"
            width={0}
            height={0}
            borderLeft="10px solid transparent"
            borderRight="10px solid transparent"
            borderTop="10px solid #009688"
            display={gameKey === "games" ? "flex" : "none"}
          />
        </Flex>

        <Flex
          w="50%"
          justifyContent="center"
          py={3}
          onClick={() => {
            setGameKey("cards");
            setShowTop10(false);
            setShowTop100(false);
            setShowPreOrder(false);
            setCategoryBorder(null);
          }}
          cursor="pointer"
          borderBottom={gameKey === "games" ? "none" : "4px"}
          borderColor="primaryColor"
          position="relative"
        >
          <Text>Trading cards</Text>
          <Flex
            position="absolute"
            bottom="-10px"
            left="50%"
            transform="translateX(-50%)"
            width={0}
            height={0}
            borderLeft="10px solid transparent"
            borderRight="10px solid transparent"
            borderTop="10px solid #009688"
            display={gameKey === "games" ? "none" : "flex"}
          />
        </Flex>
      </Flex>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        spacing={5}
        p={{ base: 2, md: 5 }}
        maxWidth="1024px"
        m="0 auto"
      >
        {filteredGames?.map((game) => (
          <Box
            key={game.id}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
            transition="all 0.2s"
            position="relative"
            mt={4}
          >
            <Link
              to={`/product/${game.name
                .replace(/\s+/g, "-")
                .toLowerCase()
                .replace(/-+$/, "")}`}
              state={{ game }}
            >
              {/* <Link
              to={`/product/${category.category_name
                .replace(/\s+/g, "-")
                .toLowerCase()
                .replace(/-+$/, "")}`}
            ></Link> */}
              <Image
                width="100%"
                height="170px" // Increased height
                src={game.image}
                alt={game.name}
                borderTopRadius="lg"
                objectFit="cover"
              />
            </Link>
            <Flex
              px={{ base: 1, md: 3 }}
              py={{ base: 3, md: 3 }}
              color="white"
              flexDirection="column"
              justifyContent="space-between"
              height="200px" // Increased height
            >
              <Text fontWeight="bold" fontSize="lg">
                {truncate(game.name, maxLength)}
              </Text>
              <Flex gap={2}>
                <Text fontSize="md">NOW {game.price}€</Text>
                <Text fontSize="sm" textDecoration="line-through" opacity="50%">
                  {game.salePrice}€
                </Text>
              </Flex>
              <Box>
                <Tooltip aria-label="Sign In Tooltip">
                  <Button
                    leftIcon={<AiOutlineShoppingCart />}
                    variant="outline"
                    colorScheme="blue"
                    size={{ base: "sm", md: "md" }}
                    bg="primaryColor"
                    color="white"
                    _hover={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "white",
                    }}
                    transition="background-color 0.3s, border-color 0.3s"
                    fontSize="xl"
                    padding={{ base: "0", md: "2" }}
                    width="100%"
                    mb={2}
                  >
                    <Text display={{ base: "none", md: "block" }} m={0}>
                      ADD TO CART
                    </Text>
                  </Button>
                </Tooltip>
                <Tooltip aria-label="Sign In Tooltip">
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    size={{ base: "sm", md: "md" }}
                    bg="grayColor"
                    color="white"
                    _hover={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "white",
                    }}
                    transition="background-color 0.3s, border-color 0.3s"
                    fontSize="xl"
                    padding={{ base: "0", md: "2" }}
                    cursor="unset"
                    width="100%"
                  >
                    <Text m={0}>3+ IN STOCK</Text>
                  </Button>
                </Tooltip>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameList;
