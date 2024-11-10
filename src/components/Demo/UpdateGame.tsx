import { produce } from "immer";
import { useState } from "react";

function UpdateGame() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Demis",
    },
  });
  const handleClick: () => void = () => {
    // setGame({ ...game, player: { ...game.player, name: "Yohannis" } });
    setGame(
      produce((logger) => {
        logger.player["name"] = "Yohannins";
      })
    );
  };
  return (
    <>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default UpdateGame;
