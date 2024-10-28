const BASE_URL = "http://localhost/board_game_api/boardgames/app/public/php"; // Replace with your local server path

// Define a type for the API response
interface ApiResponse {
  status: string;
  message: string;
}

// Register User Function
export async function registerUser(
  username: string,
  password: string
): Promise<ApiResponse> {
  const response = await fetch(`${BASE_URL}/register.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

// Login User Function
export async function loginUser(
  username: string,
  password: string
): Promise<ApiResponse> {
  const response = await fetch(`${BASE_URL}/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}
