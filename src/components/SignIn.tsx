import { useState, FormEvent } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Text,
  Box,
  VStack,
  Heading,
  Link,
} from "@chakra-ui/react";
import { loginUser } from "./api";
import { useAuth } from "./AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Use useNavigate instead

function SignIn() {
  const { setIsLoggedIn } = useAuth(); // Get the setIsLoggedIn function
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const response = await loginUser(username, password);
    if (response.status === "success") {
      setIsLoggedIn(true); // Update the isLoggedIn state
      navigate("/"); // Redirect to homepage after login
    } else {
      setMessage("Login failed");
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      bgGradient="linear(to-br, #009688, #00796b)" // Using primaryColor and a darker shade for gradient
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        maxWidth="400px"
        mx="auto"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="whiteAlpha.900"
      >
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" textAlign="center" color="#1A1A1A">
            Sign In
          </Heading>
          <form onSubmit={handleLogin}>
            <FormControl id="username" isRequired>
              <FormLabel color="#1A1A1A">Username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                bg="gray.50"
                focusBorderColor="#009688"
              />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel color="#1A1A1A">Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="gray.50"
                focusBorderColor="#009688"
              />
            </FormControl>
            <Button
              mt={6}
              bg="#009688"
              color="white"
              type="submit"
              width="full"
              _hover={{ bg: "#00796b" }}
            >
              Sign In
            </Button>
          </form>
          {message && (
            <Text mt={4} color="red.500" textAlign="center">
              {message}
            </Text>
          )}
          <Text textAlign="center" color="#1A1A1A" mt={4}>
            If you don't have an account,{" "}
            <Link color="#009688" onClick={() => navigate("/register")}>
              register here
            </Link>
            .
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default SignIn;
