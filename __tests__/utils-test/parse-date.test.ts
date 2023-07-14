import { parseDate } from "../../src/shared/utils";

describe("parseDate", () => {
  test("parseDate возвращает отформатированную дату на русском языке", () => {
    const input = "1995-12-17T03:24:00";
    const expectedOutput = "воскресенье, 17 декабря 1995 г.";
    expect(parseDate(input)).toBe(expectedOutput);
  });

  test("parseDate возвращает пустую строку, если входная строка некорректная", () => {
    const input = "2021-13-40T25:70:99";
    const expectedOutput = "";
    expect(parseDate(input)).toBe(expectedOutput);
  });
});
