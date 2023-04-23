import { ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data.results);

        setError("");
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {games.map((game) => (
          <ListItem key={game.id} id={game.id.toString()}>
            {game.name}
          </ListItem>
        ))}
        ;
      </UnorderedList>
    </>
  );
};

export default GameGrid;
