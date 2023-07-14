import { isEqual } from "../../src/shared/utils";

describe("isEqual", () => {
  const user = {
    avatar_url:
      "https://lzone.secret-agents.ru//system/news/images/2023/06/29/370/main_api.jpg?1688042599",
    id: 22,
    username: "Тестер Тостеров",
    tokens: {
      accessToken: "tokenbaerer",
      client: "client",
      uid: "sadfsdgsgdf",
    },
  };

  const initialUserState = {
    avatar_url: "",
    id: 0,
    username: "",
    tokens: {
      accessToken: "",
      client: "",
      uid: "",
    },
  };

  test("isEqual возвращает true, если объекты идентичны", () => {
    expect(isEqual(user, user)).toBe(true);
  });

  test("isEqual возвращает true, если объекты имеют одинаковые свойства и значения", () => {
    expect(isEqual(user, initialUserState)).toBe(false);
  });

  test("isEqual возвращает false, если объекты имеют разное количество свойств", () => {
    const modifiedUser = { ...user, additionalProp: "additionalValue" };
    expect(isEqual(user, modifiedUser)).toBe(false);
  });

  test("isEqual возвращает false, если объекты имеют разные значения у одного из свойств", () => {
    const modifiedUser = { ...user, username: "Измененное имя" };
    expect(isEqual(user, modifiedUser)).toBe(false);
  });
});
