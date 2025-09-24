export class Email {
  private constructor(private readonly _value: string) {}
  static create(v: string) {
    const s = (v ?? "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) throw new Error("Invalid email");
    return new Email(s);
  }
  get value() {
    return this._value;
  }
}
