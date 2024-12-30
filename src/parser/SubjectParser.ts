import { ParsedSubjectItem } from "./ParsedSubjectItem";

export interface SubjectParser {
  parse(): ParsedSubjectItem[];
}
