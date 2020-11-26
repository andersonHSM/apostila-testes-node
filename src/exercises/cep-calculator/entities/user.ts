class User {
  constructor(private _name: string, private _cep: string) {}

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  public get cep(): string {
    return this._cep;
  }

  public set cep(v: string) {
    this._cep = v;
  }
}

export default User;
