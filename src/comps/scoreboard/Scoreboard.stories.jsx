import React from "react";

import Scoreboard from "./Scoreboard";

export default { title: "Scoreboard" };

export const preGame = () => <Scoreboard />;

export const awayTeamAtBat = () => <Scoreboard awayTeam={{ innings: [0] }} />;

export const awayTeamName = () => <Scoreboard awayTeam={{ name: "Cubs" }} />;

export const extraInnings = () => (
  <Scoreboard
    awayTeam={{ innings: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0] }}
    homeTeam={{ innings: [1, 0, 0, 0, 0, 0, 0, 0, 0] }}
  />
);

export const homeTeamAtBat = () => <Scoreboard awayTeam={{ innings: [0] }} homeTeam={{ innings: [0] }} />;

export const homeTeamName = () => <Scoreboard homeTeam={{ name: "Cardinals" }} />;

export const homeTeamEarlyWin = () => (
  <Scoreboard awayTeam={{ innings: Array(9).fill(0) }} homeTeam={{ innings: [...Array(8).fill(1), 0] }} />
);
