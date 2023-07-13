import { getLink } from "../../src/shared/utils";

describe("getLink", () => {
  test("getLink возвращает ссылку, если она присутствует в строке", () => {
    const input =
      "<p>Новое мероприятие доступно по <a href='https://somesite.ru'>ссылке</a></p>";
    const expectedOutput = "https://somesite.ru";
    expect(getLink(input)).toBe(expectedOutput);
  });

  test("getLink возвращает undefined, если ссылка отсутствует в строке", () => {
    const input = "<p>Текст без ссылки</p>";
    const expectedOutput = undefined;
    expect(getLink(input)).toBe(expectedOutput);
  });
});
