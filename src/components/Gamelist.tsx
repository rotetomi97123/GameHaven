import React, { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
  description: string;
  player_count_min: number;
  player_count_max: number;
  playtime: number;
  complexity: string;
  category: string;
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
        const data: Game[] = await response.json();
        setGames(data);
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
    <div>
      <h1>Társasjátékok</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <p>
              Játékosok: {game.player_count_min} - {game.player_count_max}
            </p>
            <p>Játékidő: {game.playtime} perc</p>
            <p>Bonyolultság: {game.complexity}</p>
            <p>Kategória: {game.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
