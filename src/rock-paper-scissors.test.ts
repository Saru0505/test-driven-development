import { play } from "./rock-paper-scissors";

describe("play", () => {
  test.each([
    ["rock", "scissors", 1],
    ["scissors", "paper", 1],
    ["paper", "rock", 1],
    ["scissors", "rock", 2],
    ["paper", "scissors", 2],
    ["rock", "paper", 2],
    ["rock", "rock", 0],
    ["scissors", "scissors", 0],
    [" paper ", "PaPEr", 0]
  ])("play(%s, %s) → %i", (p1, p2, result) => {
    expect(play(p1, p2)).toBe(result);
  });

  test("throws on invalid input", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move: banana");
    expect(() => play("rock", "laser")).toThrow("Invalid move: laser");
  });
});
