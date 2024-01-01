/**
 * @throws {TypeError}
 */
export function range(
  start: string | number,
  end: string | number,
  step: number = 1
): Array<string | number> {
  // Make sure we get all of the information we need

  const startType = typeof start;
  const endType = typeof end;

  if (
    (startType !== "number" && startType !== "string") ||
    (endType !== "number" && endType !== "string")
  ) {
    throw TypeError("Must pass both start and end arguments.");
  }

  if (startType !== endType) {
    throw TypeError("Start and end arguments must be of same type.");
  }

  if (typeof step !== "number") {
    throw TypeError("Step must be a number.");
  }

  if (step === 0) {
    throw TypeError("Step cannot be zero.");
  }

  if (step < 0) {
    throw TypeError("Step cannot be negative.");
  }

  // Handle a range that decrements
  if (end < start) {
    step = -step;
  }

  if (startType === "number") {
    return handleNumberRange(start as number, end as number, step);
  }
  if (startType === "string") {
    // @ts-expect-error
    if (start.length !== 1 || end.length !== 1) {
      throw TypeError("Start and end arguments must be single characters.");
    }

    if (
      // @ts-expect-error
      start.charCodeAt(0) < 0 ||
      // @ts-expect-error
      start.charCodeAt(0) > 65535 ||
      // @ts-expect-error
      end.charCodeAt(0) < 0 ||
      // @ts-expect-error
      end.charCodeAt(0) > 65535
    ) {
      throw TypeError(
        "Start and end arguments must be UTF-16 code units. (0 - 65535)"
      );
    }
    return handleStringRange(start as string, end as string, step);
  }
  throw TypeError("Only string and number types are supported");
}

function handleNumberRange(start: number, end: number, step: number) {
  // According to MDN, this is the way to generate a range of numbers
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
  return Array.from(
    { length: (end - start) / step + 1 },
    (_, i) => start + i * step
  );
}

function handleStringRange(start: string, end: string, step: number) {
  // We can extend the number range to a string range by converting the characters to their char codes
  // and then back to strings
  return Array.from(
    { length: (end.charCodeAt(0) - start.charCodeAt(0)) / step + 1 },
    (_, i) => start.charCodeAt(0) + i * step
  ).map((x) => String.fromCharCode(x));
}
