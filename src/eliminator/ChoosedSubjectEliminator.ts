import { SubjectElminator } from "./SubjectEliminator";
import { SubjectSchedule } from "./../parser/SubjectSchedule";

export class ChoosedSubjectEliminator extends SubjectElminator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  execute(targetSchedule: SubjectSchedule, reason: string[]): string[] {
    if (subjectSchedule.name == this.name) {
      reason.push(this.message);
    }

    return super.execute(targetSchedule, reason);
  }
}
