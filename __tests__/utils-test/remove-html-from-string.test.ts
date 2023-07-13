import { removeHTMLTagsFromString } from "../../src/shared/utils";

describe("removeHTMLTagsFromString", () => {
  test("removeHTMLTagsFromString строка приходящая с сервера", () => {
    const input =
      "<p>Новое мероприятие доступно по <a href='https://somesite.ru'>ссылке</a></p>";
    const expectedOutput = "Новое мероприятие доступно по ссылке";
    expect(removeHTMLTagsFromString(input)).toBe(expectedOutput);
  });

  test("removeHTMLTagsFromString самозакрывающийся тег", () => {
    const input = "Привет,<br> Мир.";
    const expectedOutput = "Привет, Мир.";
    expect(removeHTMLTagsFromString(input)).toBe(expectedOutput);
  });

  test("removeHTMLTagsFromString сломанный HTML", () => {
    const input = "<div><div><p>https://somedata</p><div> текст</div>";
    const expectedOutput = "https://somedata текст";
    expect(removeHTMLTagsFromString(input)).toBe(expectedOutput);
  });

  test("removeHTMLTagsFromString несколько тегов в ряд", () => {
    const input = "<h1>Два</h1><p>Тега</p>";
    const expectedOutput = "ДваТега";
    expect(removeHTMLTagsFromString(input)).toBe(expectedOutput);
  });

  test("removeHTMLTagsFromString пустая строка", () => {
    const input = "";
    const expectedOutput = "";
    expect(removeHTMLTagsFromString(input)).toBe(expectedOutput);
  });

  test("removeHTMLTagsFromString строка без HTML тегов", () => {
    const input = "Строка без HTML тегов.";
    const expectedOutput = "Строка без HTML тегов.";
    expect(removeHTMLTagsFromString(input)).toBe(expectedOutput);
  });
});
