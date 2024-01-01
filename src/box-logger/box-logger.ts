function formatRoundedBox(input: string) {
  if (typeof input !== "string") throw TypeError("Input must be a string.");
  let topLine = "╭─";
  let middleLine = "│ ";
  let bottomLine = "╰─";

  for (const char of input) {
    topLine = topLine + "─";
    middleLine = middleLine + char;
    bottomLine = bottomLine + "─";
  }

  topLine = topLine + "─╮";
  middleLine = middleLine + " │";
  bottomLine = bottomLine + "─╯";

  return topLine + "\n" + middleLine + "\n" + bottomLine;
}

function formatSquareBox(input: string) {
  if (typeof input !== "string") throw TypeError("Input must be a string.");
  let topLine = "┌─";
  let middleLine = "│ ";
  let bottomLine = "└─";

  for (const char of input) {
    topLine = topLine + "─";
    middleLine = middleLine + char;
    bottomLine = bottomLine + "─";
  }

  topLine = topLine + "─┐";
  middleLine = middleLine + " │";
  bottomLine = bottomLine + "─┘";

  return topLine + "\n" + middleLine + "\n" + bottomLine;
}

function formatDoubleBox(input: string) {
  if (typeof input !== "string") throw TypeError("Input must be a string.");
  let topLine = "╔═";
  let middleLine = "║ ";
  let bottomLine = "╚═";

  for (const char of input) {
    topLine = topLine + "═";
    middleLine = middleLine + char;
    bottomLine = bottomLine + "═";
  }

  topLine = topLine + "═╗";
  middleLine = middleLine + " ║";
  bottomLine = bottomLine + "═╝";

  return topLine + "\n" + middleLine + "\n" + bottomLine;
}
