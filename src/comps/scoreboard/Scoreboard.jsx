import React, { useMemo } from "react";

import sum from "lodash/sum";

import TeamLine from "./TeamLine";

/**
 *
 * @typedef {import("./TeamLine").Team} Team
 */

/**
 *
 * @param {{
 * awayTeam?: Team
 * homeTeam?: Team
 * }} props
 */
const Scoreboard = ({ awayTeam, homeTeam }) => {
  const awayInnings = awayTeam?.innings;
  const homeInnings = homeTeam?.innings;

  const totalInnings = Math.max(9, awayInnings?.length ?? 0, homeInnings?.length ?? 0);

  const earlyWin = useMemo(
    () => awayInnings?.length === 9 && homeInnings?.length === 9 && sum(awayInnings) < sum(homeInnings),
    [awayInnings, homeInnings],
  );

  return (
    <div className="scoreboard">
      <table className="table is-bordered">
        <thead>
          <tr>
            <th></th>
            {Array(totalInnings)
              .fill()
              .map((_, i) => (
                <th key={i}>{i + 1}</th>
              ))}
            <th title="Runs">R</th>
            <th title="Hits">H</th>
            <th title="Errors">E</th>
          </tr>
        </thead>
        <tbody>
          <TeamLine {...awayTeam} totalInnings={totalInnings} type="away" />
          <TeamLine {...homeTeam} totalInnings={totalInnings} type="home" earlyWin={earlyWin} />
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
