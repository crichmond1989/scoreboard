import React from "react";

import Scoreboard from "../scoreboard/Scoreboard";

/**
 * @typedef {import("../scoreboard/Scoreboard").Team} Team
 */

const Home = () => {
  /**
   * @type {[Team, Team]}
   */
  const game1 = [
    {
      name: "Cubs",
      errors: 0,
      hits: 7,
      innings: [1, 1, 0, 0, 0, 0, 2, 0, 0],
    },
    {
      name: "Cardinals",
      errors: 0,
      hits: 12,
      innings: [1, 0, 1, 0, 0, 3, 0, 2, 0],
    },
  ];

  /**
   * @type {[Team, Team]}
   */
  const game2 = [
    {
      name: "Cubs",
      errors: 0,
      hits: 6,
      innings: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "Cardinals",
      errors: 0,
      hits: 5,
      innings: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    },
  ];

  return (
    <article className="container">
      <h1>Latest Games</h1>
      <Scoreboard awayTeam={game1[0]} homeTeam={game1[1]} />
      <br />
      <Scoreboard awayTeam={game2[0]} homeTeam={game2[1]} />
    </article>
  );
};

export default Home;
