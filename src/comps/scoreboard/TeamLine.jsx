import React, { useMemo } from "react";

import sum from "lodash/sum";
import PropTypes from "prop-types";

/**
 *
 * @typedef {{
 * name?: string
 * innings?: number[]
 * errors?: number
 * hits?: number
 * }} Team
 */

/**
 *
 * @param {number[]} runs
 * @param {number} length
 * @param {boolean} earlyWin
 * @returns {(number|string)[]}
 */
const padInnings = (runs = [], length, earlyWin) => {
  if (earlyWin) {
    return [...runs.slice(0, 8), "X"];
  }

  if (length <= runs.length) {
    return runs;
  }

  return [...runs, ...Array(length - runs.length).fill()];
};

/**
 *
 * @param {Team & {
 * earlyWin?: boolean
 * totalInnings?: number
 * type?: "away" | "home"
 * }} team
 */
const TeamLine = ({ earlyWin = false, name, innings = [], errors = 0, hits = 0, totalInnings = 9, type = "away" }) => {
  const allInnings = useMemo(() => padInnings(innings, totalInnings, earlyWin), [earlyWin, innings, totalInnings]);
  const runs = useMemo(() => sum(innings), [innings]);

  return (
    <tr className="team-line">
      <td data-testid={`${type} team name`}>{name ?? type[0].toLocaleUpperCase() + type.substring(1)}</td>
      {allInnings.map((runs, i) => (
        <td key={i} data-testid={`${type} team inning ${i + 1}`}>
          {runs}
        </td>
      ))}
      <td className="summary">{runs}</td>
      <td className="summary">{hits}</td>
      <td className="summary">{errors}</td>
    </tr>
  );
};

TeamLine.propTypes = {
  earlyWin: PropTypes.bool,
  name: PropTypes.string,
  innings: PropTypes.arrayOf(PropTypes.number),
  errors: PropTypes.number,
  hits: PropTypes.number,
  totalInnings: PropTypes.number,
  type: PropTypes.string,
};

export default TeamLine;
