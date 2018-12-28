export class User {
  public ID: number;
  public UserName: string;
  public Password: string;

  constructor(data?) {
    this.ID = data && data.ID ? data.ID : null;
    this.UserName = data && data.UserName ? data.UserName : null;
    this.Password = data && data.Password ? data.Password : null;
  }
}
