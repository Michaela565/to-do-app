class DiaryObject {
  private id: number;
  private description: string;
  constructor(id: number, description: string) {
    if (this.constructor === DiaryObject) {
      throw new Error("Can't create an object of an abstract class");
    }
    this.description = description;
    this.id = id;
  }

  public getID(): number {
    return this.id;
  }

  public setID(value: number) {
    this.id = value;
  }

  public getDescriptionOrTitle(): string {
    return this.description;
  }

  public setDescriptionOrTitle(value: string) {
    this.description = value;
  }
}

export { DiaryObject };
