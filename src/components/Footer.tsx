import {
  Box,
  Text,
  Stack,
  IconButton,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="darkGray" color="white" py={8}>
      <Stack spacing={6} align="center">
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          Stay Connected!
        </Text>
        <FormControl
          display="flex"
          alignItems="center"
          mb={4}
          maxW="600px"
          px={2}
        >
          <Input
            placeholder="Enter your email"
            bg="gray.700"
            color="white"
            borderColor="teal.500"
            _placeholder={{ color: "gray.400" }} // Placeholder color
            variant="outline"
            mr={2}
            borderRadius="md"
            size="lg" // Larger input field
          />
          <Button colorScheme="teal" size="lg" borderRadius="md">
            Subscribe
          </Button>
        </FormControl>
        <Text fontSize="sm" textAlign="center" color="gray.300">
          Subscribe to our newsletter for the latest updates and offers!
        </Text>
        <Text fontSize="sm" textAlign="center">
          Follow us on social media:
        </Text>
        <Box display="flex" justifyContent="center" mt={2}>
          <IconButton
            as="a"
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            colorScheme="teal"
            variant="outline"
            mr={2}
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="pink"
            variant="outline"
            mr={2}
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.discord.com"
            target="_blank"
            aria-label="Discord"
            icon={<FaDiscord />}
            colorScheme="blue"
            variant="outline"
            mr={2}
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.youtube.com"
            target="_blank"
            aria-label="YouTube"
            icon={<FaYoutube />}
            colorScheme="red"
            variant="outline"
            mr={2}
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.tiktok.com"
            target="_blank"
            aria-label="TikTok"
            icon={<FaTiktok />}
            colorScheme="teal"
            variant="outline"
            size="lg"
          />
        </Box>
        <Text fontSize="sm" mt={4} textAlign="center" color="gray.400">
          © 2024 Your Board Game Website. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
