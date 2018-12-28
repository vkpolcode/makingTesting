export class User {
  public id: number;
  public name: string;

  constructor(data?) {
    this.id = data && data.id ? data.id : null;
    this.name = data && data.name ? data.name : null;
  }
}
