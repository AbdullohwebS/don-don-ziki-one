export function robotChooser() {
  const hands = ["paper", "rock", "scissors"];
  const randomIndex = Math.trunc(Math.random() * hands.length);
  return hands[randomIndex];
}