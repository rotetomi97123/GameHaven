import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Image,
  List,
  ListItem,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Input,
  Button,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { HiHeart } from "react-icons/hi";
import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface Category {
  id: number;
  category_name: string;
}

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [categories, setCategories] = useState<Category[]>([]);
  const [data, setData] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost/board_game_api/get_games.php"
        ); // Replace with your actual URL
        const data = await response.json();

        if (data.cards) {
          setData(data);
        }

        if (data.categories) {
          setCategories(data.categories);
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
  }, []);
  // console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Box bg="#2A2A2A">
        <Box maxWidth="1080px" margin="0 auto">
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            align="center"
            px={4}
          >
            <Box p={2}>
              <Link to="/">
                <Image
                  height={{ base: "75px", md: "110px" }}
                  src="https://i.ibb.co/pKSPGQw/Untitled-design-removebg-preview.png"
                  alt="Logo"
                />
              </Link>
            </Box>
            <Flex display={{ base: "none", lg: "flex" }}>
              <Input
                id="text-input"
                type="text"
                placeholder="Search for products..."
                variant="outline"
                color="white"
                borderColor="primaryColor"
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                minWidth="350px"
                py="6"
                _placeholder={{ color: "gray.400" }}
                _focus={{
                  borderColor: "primaryColor",
                  boxShadow: "none",
                }}
              />

              <Button
                bg="primaryColor"
                borderTopLeftRadius="0"
                borderBottomLeftRadius="0"
                height="49.6px"
              >
                <SearchIcon boxSize={6} color="white" />
              </Button>
            </Flex>
            <Box color="primaryColor" pb={{ base: 4, sm: 0 }}>
              <List display="flex" fontSize="xl" textTransform="uppercase">
                <ListItem
                  mx={{ base: "1", md: "2" }}
                  cursor="pointer"
                  fontWeight="600"
                  _hover={{ color: "white", transition: "0.1s" }}
                  display={{ base: "flex", lg: "none" }}
                >
                  <Tooltip aria-label="Add to Favorites Tooltip">
                    <IconButton
                      aria-label="Favorite"
                      icon={<SearchIcon />}
                      variant="outline"
                      colorScheme="primaryColor"
                      size={{ base: "sm", md: "md" }}
                      bg="transparent"
                      color="white"
                      _hover={{ color: "primaryColor" }}
                      _active={{ color: "primaryColor" }}
                      padding={{ base: "0", md: "2" }}
                      onClick={() => setIsShowSearch((prev) => !prev)}
                    />
                  </Tooltip>{" "}
                </ListItem>
                <ListItem
                  mx={{ base: "1", md: "2" }}
                  cursor="pointer"
                  fontWeight="600"
                  _hover={{ color: "white", transition: "0.1s" }}
                >
                  <Tooltip
                    label="View Favorites "
                    aria-label="Add to Favorites Tooltip"
                  >
                    <IconButton
                      aria-label="Favorite"
                      icon={<HiHeart />}
                      variant="outline"
                      colorScheme="primaryColor"
                      size={{ base: "sm", md: "md" }}
                      bg="transparent"
                      color="white"
                      _hover={{ color: "primaryColor" }}
                      _active={{ color: "primaryColor" }}
                      padding={{ base: "0", md: "2" }}
                    />
                  </Tooltip>{" "}
                </ListItem>
                <ListItem
                  mx={{ base: "1", md: "2" }}
                  cursor="pointer"
                  fontWeight="600"
                  _hover={{ color: "white", transition: "0.1s" }}
                >
                  <Tooltip aria-label="Sign In Tooltip">
                    <Button
                      leftIcon={<AiOutlineLogin />}
                      variant="outline"
                      colorScheme="blue"
                      size={{ base: "sm", md: "md" }}
                      bg="transparent"
                      color="white"
                      border={{ base: "1px solid white ", md: "none" }}
                      padding={{ base: "0", md: "2" }}
                      _hover={{ color: "primaryColor" }}
                      _active={{ color: "primaryColor" }}
                      fontSize="xl"
                    >
                      <Text display={{ base: "none", md: "flex" }}>
                        {isLoggedIn ? "LOGGED IN" : "SIGN IN"}
                      </Text>
                    </Button>
                  </Tooltip>
                </ListItem>
                <ListItem
                  mx={{ base: "1", md: "2" }}
                  cursor="pointer"
                  fontWeight="600"
                  _hover={{ color: "white", transition: "0.1s" }}
                >
                  <Tooltip aria-label="Sign In Tooltip">
                    <Button
                      leftIcon={<AiOutlineShoppingCart />}
                      variant="outline"
                      colorScheme="blue"
                      size={{ base: "sm", md: "md" }}
                      bg="transparent"
                      color="white"
                      border={{ base: "1px solid white ", md: "none" }}
                      _hover={{ color: "primaryColor" }}
                      _active={{ color: "primaryColor" }}
                      fontSize="xl"
                      padding={{ base: "0", md: "2" }}
                    >
                      <Text display={{ base: "none", md: "block" }} m={0}>
                        BASKET
                      </Text>{" "}
                    </Button>
                  </Tooltip>{" "}
                </ListItem>
                <ListItem display={{ base: "flex", md: "none" }}>
                  <Box>
                    <Menu isOpen={isOpen}>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HamburgerIcon />}
                        onClick={isOpen ? onClose : onOpen}
                        variant="outline"
                        colorScheme="white"
                        size="sm"
                        mx={1}
                        color="white"
                      />
                      <MenuList mx={5} bg="darkGray" maxW="200px">
                        {categories.map((category) => (
                          <Link
                            to={`/category/${category.category_name
                              .replace(/\s+/g, "-")
                              .toLowerCase()
                              .replace(/-+$/, "")}`}
                          >
                            <MenuItem
                              key={category.id}
                              px={4}
                              cursor="pointer"
                              _hover={{
                                color: "primaryColor",
                                transition: "0.1s",
                              }}
                              bg="darkGray"
                              color="white"
                            >
                              {category.category_name}
                            </MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Box>
      {isShowSearch && (
        <Box>
          <Flex
            display={{ base: "flex", lg: "none" }}
            py={4}
            px={5}
            justify="center"
          >
            <Input
              id="text-input"
              type="text"
              placeholder="Search for products..."
              variant="outline"
              color="white"
              borderColor="primaryColor"
              borderTopRightRadius="0"
              borderBottomRightRadius="0"
              width="90%"
              py="6"
              _placeholder={{ color: "gray.400" }}
              _focus={{
                borderColor: "primaryColor",
                boxShadow: "none",
              }}
            />

            <Button
              bg="primaryColor"
              borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
              height="49.6px"
            >
              <SearchIcon boxSize={6} color="white" />
            </Button>
          </Flex>
        </Box>
      )}
      <Box
        width="100%"
        color="white"
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
      >
        <List
          display="flex"
          justifyContent="center"
          fontSize="md"
          textTransform="uppercase"
          py="2"
        >
          {categories.map((category) => (
            <Link
              to={`/category/${category.category_name
                .replace(/\s+/g, "-")
                .toLowerCase()
                .replace(/-+$/, "")}`}
              state={{
                category:
                  category.category_name === "Board games"
                    ? "Board games"
                    : category.category_name === "Trading cards"
                    ? "Trading cards"
                    : category.category_name === "Puzzles"
                    ? "Puzzles"
                    : "Other",
              }}
            >
              {" "}
              <ListItem
                key={category.id}
                px={4}
                cursor="pointer"
                _hover={{ color: "primaryColor", transition: "0.1s" }}
              >
                {category.category_name}
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
      <Box
        textAlign="center"
        color="white"
        bg="primaryColor"
        py="2"
        textTransform="uppercase"
        fontSize={{ base: "sm", md: "md" }}
        display={{ base: "block", md: "flex" }}
        justifyContent="center"
      >
        <Text display={{ base: "none", sm: "block" }}>
          Buy 3, get 3% off - use code HAVEN3 ,{" "}
        </Text>
        <Text> Buy 5 get 5% off - use code HAVEN5</Text>
      </Box>
    </>
  );
};

export default Navbar;
