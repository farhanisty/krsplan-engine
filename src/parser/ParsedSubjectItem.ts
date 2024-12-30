import { Schedule } from "./../time/Schedule";
export type ParsedSubjectItem = {
  id: number;
  studyProgram: string;
  code: string;
  name: string;
  credits: number;
  className: string;
  numberOfStudent: number;
  schedule: Schedule;
  classRoom: string;
  lecturers: string[];
};
