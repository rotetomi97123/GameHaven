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
import bestSeller from "../assets/bestSeller2.png";

interface Game {
  id: number;
  name: string;
  description: string;
  player_count_min: number;
  player_count_max: number;
  playtime: number;
  complexity: string;
  category: string;
  price: number;
  image: string;
}

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "http://localhost/board_game_api/get_games.php"
        ); // Frissítsd az elérési utat, ha szükséges
        if (!response.ok) {
          throw new Error("Hiba történt a játékok lekérése során");
        }
        const data = await response.json();
        if (data.games) {
          setGames(data.games);
        }
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

  return (
    <Box mt={{ base: 10, lg: 0 }}>
      <Flex
        bg="grayColor"
        px={{ base: 1, sm: 4 }}
        py={4}
        color="white"
        maxWidth="1024px"
        m="0 auto"
        borderRadius="md"
        justifyContent={{ base: "center", sm: "space-between" }}
      >
        <Text display={{ base: "none", sm: "block" }}>Latest charts</Text>
        <Flex>
          <Box
            borderRight="1px"
            borderLeft="1px"
            height="100%"
            px={{ base: 1, sm: 4 }}
            cursor="pointer"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <GiTrophy size={20} color="white" />
            TOP10
          </Box>
          <Box
            borderRight="1px"
            height="100%"
            px={{ base: 1, sm: 4 }}
            cursor="pointer"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <AiOutlineClockCircle size={20} color="white" />
            Pre-Order
          </Box>
          <Box
            borderRight="1px"
            height="100%"
            px={{ base: 1, sm: 4 }}
            cursor="pointer"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <GiDiceTwentyFacesOne size={20} color="white" />
            BGG Top 100
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        spacing={5}
        p={5}
        maxWidth="1024px"
        m="0 auto"
      >
        {games.map((game) => (
          <Box
            key={game.id}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "lg" }} // Hover effect
            transition="all 0.2s"
            position="relative"
            mt={4}
          >
            <Image
              width="100%" // Full width for responsive design
              height="200px" // Fixed height for uniformity
              src={game.image}
              alt={game.name}
              borderTopRadius="lg"
              objectFit="cover" // Maintain aspect ratio while filling the space
            />
            <Flex
              p={3}
              color="white"
              flexDirection="column"
              justifyContent="space-between"
              height="177px"
            >
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {game.name}
              </Text>
              <Flex gap={2}>
                <Text fontSize="md">NOW {game.price}€</Text>
                <Text fontSize="sm" textDecoration="line-through" opacity="50%">
                  {" "}
                  {game.price}€
                </Text>
              </Flex>
              <Tooltip aria-label="Sign In Tooltip">
                <Button
                  leftIcon={<AiOutlineShoppingCart />}
                  variant="outline"
                  colorScheme="blue"
                  size={{ base: "sm", md: "md" }}
                  bg="transparent"
                  color="white"
                  _hover={{ color: "primaryColor" }}
                  _active={{ color: "primaryColor" }}
                  fontSize="xl"
                  padding={{ base: "0", md: "2" }}
                >
                  <Text display={{ base: "none", md: "block" }} m={0}>
                    ADD TO CART
                  </Text>{" "}
                </Button>
              </Tooltip>{" "}
            </Flex>
            <Image
              src={bestSeller}
              alt="bestseller"
              position="absolute"
              right="-20px"
              top="170px"
              width="60px"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameList;
