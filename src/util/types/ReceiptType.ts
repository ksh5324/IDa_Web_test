import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";

export type Receipt = {
  absenceScore: number;
  additionalScore: number;
  applyDetailType: ApplyDetail;
  applyType: Apply;
  applyTypeString: string;
  birth: string;
  cityName: string;
  examCode: string;
  gradeScore: number;
  gradeType: Grade;
  idx: number;
  isSubmit: boolean;
  name: string;
  schoolName: string;
  submitCode: string;
  commonTotalScore: number;
  specialTotalScore: number;
  userIdx: number;
  volunteerScore: number;
};
