import { SubjectSchedule } from "./SubjectSchedule";
import { SubjectParser } from "./SubjectParser";
import { Schedule } from "./../time/Schedule";

export class SubjectParserImpl implements SubjectParser {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  parse(): SubjectSchedule[] {
    const results: SubjectSchedule[] = [];

    const lines = this.text.split("\n");

    let key: string = "";

    let subjectItemTemp = null;

    let counter = 1;

    for (const line of lines) {
      if (line.length === 0) {
        continue;
      }
      const parsedLine = line.split("\t");

      if (key === "") {
        key = parsedLine[0];
      }

      if (parsedLine[0] == key) {
        subjectItemTemp = {
          id: counter,
          studyProgram: key,
          code: parsedLine[1],
          name: parsedLine[2].trim(),
          credits: parsedLine[3],
          className: parsedLine[4],
          numberOfStudent: parsedLine[5],
          schedule: Schedule.buildFromString(parsedLine[6]),
          classRoom: parsedLine[7],
          lecturers: [],
        };

        results.push(subjectItemTemp);

        counter += 1;
      } else {
        subjectItemTemp.lecturers.push(parsedLine[0]);
      }
    }

    return results;
  }
}
