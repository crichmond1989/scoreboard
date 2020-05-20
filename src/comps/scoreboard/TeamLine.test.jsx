import React from "react";

import { render, screen } from "@testing-library/react";

import TeamLine from "./TeamLine";

/**
 *
 * @param {TeamLine} el
 */
const wrap = el =>
  render(
    <table>
      <tbody>{el}</tbody>
    </table>,
  );

test("current inning has number", () => {
  wrap(<TeamLine type="away" innings={[0, 1]} />);

  expect(screen.getByTestId("away team inning 2")).toHaveTextContent("1");
});

test("custom team name", () => {
  wrap(<TeamLine name="custom" type="away" />);

  expect(screen.getByTestId("away team name")).toHaveTextContent("custom");
});

test("extra innings", () => {
  wrap(<TeamLine type="away" innings={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />);

  expect(screen.getByTestId("away team inning 10")).toHaveTextContent("10");
});

test("home team early win shows X", () => {
  wrap(<TeamLine earlyWin={true} innings={[...Array(8).fill(1), 0]} totalInnings={9} type="home" />);

  expect(screen.getByTestId("home team inning 9")).toHaveTextContent("X");
});

test("pre-game has blank innings", () => {
  wrap(<TeamLine type="away" />);

  expect(screen.getByTestId("away team inning 1")).toHaveTextContent("");
});

test("unplayed innings are blank", () => {
  wrap(<TeamLine type="away" innings={[0, 1]} />);

  expect(screen.getByTestId("away team inning 3")).toHaveTextContent("");
});
