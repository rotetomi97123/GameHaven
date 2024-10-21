import React from "react";
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
} from "@chakra-ui/react"; // Optimalizált import
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#2A2A2A">
      <Box maxWidth="1080px" margin="0 auto">
        <Flex direction="row" justify="space-between" align="center" px={4}>
          <Box p={2}>
            <Image
              height="100px"
              src="https://i.ibb.co/XzSb1YT/1-removebg-preview.png"
              alt="Logo"
            />
          </Box>
          <Box color="white" display={{ base: "none", md: "flex" }}>
            <List display="flex" fontSize="lg">
              <ListItem mx={3} cursor="pointer" fontWeight="600">
                Home
              </ListItem>
              <ListItem mx={3} cursor="pointer" fontWeight="600">
                Games
              </ListItem>
              <ListItem mx={3} cursor="pointer" fontWeight="600">
                Kontakt
              </ListItem>
            </List>
          </Box>
          <Box display={{ base: "flex", md: "none" }}>
            <Menu isOpen={isOpen}>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                onClick={isOpen ? onClose : onOpen}
                variant="outline"
                colorScheme="teal"
                size="lg"
              />
              <MenuList>
                <MenuItem onClick={onClose}>Home</MenuItem>
                <MenuItem onClick={onClose}>Games</MenuItem>
                <MenuItem onClick={onClose}>About</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
