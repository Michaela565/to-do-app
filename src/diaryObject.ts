class DiaryObject {
  private id: number;
  constructor(id: number) {
    if (this.constructor === DiaryObject) {
      throw new Error("Can't create an object of an abstract class");
    }

    this.id = id;
  }

  public getID(): number {
    return this.id;
  }

  public setID(value: number) {
    this.id = value;
  }
}

export { DiaryObject };
