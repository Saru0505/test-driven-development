export function play(p1: string, p2: string): number {
  const normalize = (move: string) => move.trim().toLowerCase();
  const valid = ["rock", "paper", "scissors"];
  const a = normalize(p1);
  const b = normalize(p2);

  if (!valid.includes(a)) throw new Error(`Invalid move: ${p1}`);
  if (!valid.includes(b)) throw new Error(`Invalid move: ${p2}`);

  if (a === b) return 0;

  if (
    (a === "rock" && b === "scissors") ||
    (a === "scissors" && b === "paper") ||
    (a === "paper" && b === "rock")
  ) {
    return 1;
  }

  return 2;
}
