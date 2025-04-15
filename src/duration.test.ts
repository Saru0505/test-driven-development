import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("formats seconds only", () => {
    expect(formatDuration(33)).toBe("33s");
  });

  test("formats minutes and seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");
    expect(formatDuration(500)).toBe("8m20s");
  });

  test("formats hours only", () => {
    expect(formatDuration(3600)).toBe("1h");
  });

  test("formats hours, minutes and seconds", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });

  test("formats zero seconds", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  test("throws error on negative seconds", () => {
    expect(() => formatDuration(-1)).toThrow("Negative duration is not allowed");
  });

  test("rounds fractional seconds", () => {
    expect(formatDuration(59.9)).toBe("1m");
    expect(formatDuration(62.4)).toBe("1m2s");
  });
});
