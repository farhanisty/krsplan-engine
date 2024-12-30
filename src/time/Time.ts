export class Time {
  hour: int;
  minute: int;

  constructor(hour: int, minute: int) {
    this.hour = hour;
    this.minute = minute;
  }

  inMinute(): int {
    return this.hour * 60 + this.minute;
  }

  static buildFromString(time: string) {
    const res = time.split(":");
    return new Time(res[0], res[1]);
  }
}
