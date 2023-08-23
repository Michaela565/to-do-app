import { Diary } from "../src/diary";
import { Project } from "../src/project";

describe("diary testing", () => {
  const newdiary = new Diary("my diary", 2, []);
  const project1 = new Project(
    "project one",
    "first project",
    Project.getFreeID(newdiary),
    []
  );
  const project2 = new Project(
    "project two",
    "second project",
    Project.getFreeID(newdiary),
    []
  );
  const project3 = new Project(
    "project three",
    "third project",
    Project.getFreeID(newdiary),
    []
  );

  test("append projects into empty diary", () => {
    newdiary.appendProject(project1);
    newdiary.appendProject(project2);
    newdiary.appendProject(project3);
    expect(newdiary.getProjects()).toEqual([project1, project2, project3]);
  });

  test("getting a project from diary", () => {
    expect(newdiary.getProject(1)).toEqual(project2);
  });

  test("appending a project successfully", () => {
    const project4 = new Project(
      "project four",
      "fourth project",
      Project.getFreeID(newdiary),
      []
    );
    newdiary.appendProject(project4);
    expect(newdiary.getProjects()).toEqual([
      project1,
      project2,
      project3,
      project4,
    ]);
  });

  test("appending a project successfully and getting it back", () => {
    const project4 = new Project(
      "project four",
      "fourth project",
      Project.getFreeID(newdiary),
      []
    );
    newdiary.appendProject(project4);
    expect(newdiary.getProject(newdiary.getProjectsLength() - 1)).toEqual(
      project4
    );
  });
});

describe("project testing", () => {
  const newdiary = new Diary("my diary", 2, []);
  const project1 = new Project(
    "project one",
    "first project",
    Project.getFreeID(newdiary),
    []
  );
  newdiary.appendProject(project1);
  const project2 = new Project(
    "project two",
    "second project",
    Project.getFreeID(newdiary),
    []
  );
  newdiary.appendProject(project2);
  const project3 = new Project(
    "project three",
    "third project",
    Project.getFreeID(newdiary),
    []
  );
  newdiary.appendProject(project3);

  test("make sure project gets the right id", () => {
    expect(project1.getID()).toEqual(0);
    expect(project2.getID()).toEqual(1);
    expect(project3.getID()).toEqual(2);
  });
});
