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
import { registerUser } from "./api";

function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic validation
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Call your API to register the user
    const response = await registerUser(username, password);

    if (response.status === "error") {
      if (response.message === "Username already taken") {
        setError("This username is already taken.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } else {
      setMessage("Registration successful!");
      // Optionally redirect or reset the form here
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      bgGradient="linear(to-br, #009688, #00796b)"
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
            Register
          </Heading>
          <form onSubmit={handleRegister}>
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
              Register
            </Button>
          </form>
          {error && (
            <Text mt={4} color="red.500" textAlign="center">
              {error}
            </Text>
          )}
          {message && (
            <Text mt={4} color="green.500" textAlign="center">
              {message}
            </Text>
          )}
          <Text textAlign="center" color="#1A1A1A" mt={4}>
            Already have an account?{" "}
            <Link
              color="#009688"
              onClick={() => (window.location.href = "/login")}
            >
              Sign In
            </Link>
            .
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default Register;
