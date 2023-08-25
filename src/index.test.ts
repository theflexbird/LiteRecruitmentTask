import { solve } from "./index";

describe("suite", () => {
  test("test0", async function () {
    const result = await solve("./src/tests/test0.log");
    expect(result).toEqual({});
  });

  test("test1", async function () {
    const result = await solve("./src/tests/test1.log");
    expect(result).toEqual({
      1001: { state: "created", ts: 125125151 },
      1002: { state: "created", ts: 125125160 }
    });
  });

  test("test2", async function () {
    const result = await solve("./src/tests/test2.log");
    expect(result).toEqual({
      1001: { state: "completed", ts: 125125153 },
      1002: { state: "created", ts: 125125160 }
    });
  });

  test("test3", async function () {
    const result = await solve("./src/tests/test3.log");
    expect(result).toEqual({
      1001: { state: "in_progress", ts: 125125152 },
      1002: { state: "created", ts: 125125160 }
    });
  });

  test("test4", async function () {
    const result = await solve("./src/tests/test4.log");
    expect(result).toEqual({
      1001: { state: "created", ts: 125125152 },
      1002: { state: "created", ts: 125125160 }
    });
  });

  test("test5", async function () {
    const result = await solve("./src/tests/test5.log");
    expect(result).toEqual({
      1001: { state: "created", ts: 125125151 },
      1002: { state: "created", ts: 125125160 }
    });
  });

  test("test6", async function () {
    const result = await solve("./src/tests/test6.log");
    expect(result).toEqual({
      1001: { state: "created", ts: 125125151 }
    });
  });

  test("test7", async function () {
    const result = await solve("./src/tests/test7.log");
    expect(result).toEqual({
      1001: { state: "created", ts: 125125151 },
      1002: { state: "created", ts: 125125160 }
    });
  });

  test("test8", async function () {
    const result = await solve("./src/tests/test8.log");
    expect(result).toEqual({
      1001: { state: "completed", ts: 125125152 },
      1002: { state: "in_progress", ts: 125125157 },
      1003: { state: "completed", ts: 125125156 }
    });
  });
});
