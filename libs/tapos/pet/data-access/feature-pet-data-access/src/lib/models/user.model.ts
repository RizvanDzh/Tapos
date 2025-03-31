export class User {
  constructor(
    public id: number,
    public name: string,
    public nickname: string,
    public disabled: boolean = false,
  ) {}
}
