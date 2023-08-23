import { Diary } from "../src/diary";

describe("diary testing", () => {
  test("getting a project from diary", () => {
    const newdiary = new Diary("my diary", 2, ["hi", "heya", "hello"]);
    expect(newdiary.getProject(2)).toBe("hello");
  });
});
