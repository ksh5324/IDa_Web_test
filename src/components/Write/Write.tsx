import React, { useMemo } from "react";
import WriteStudent from "../../containers/Write/WriteStudent/WriteStudentContainer";
import WriteParent from "../../containers/Write/WriteParent/WriteParentContainer";
import WritePhoto from "../../containers/Write/WritePhoto/WritePhotoContainer";
import WriteSchool from "../../containers/Write/WriteSchool/WriteSchoolContainer";
import WriteAdmission from "../../containers/Write/WriteAdmission/WriteAdmissionContainer";
import WriteGrades from "../../containers/Write/WriteGrade/WriteGradeContainer";
import WriteIntroduction from "../../containers/Write/WriteIntroduction/WriteIntroductionContainer";
import "react-step-progress/dist/index.css";
import "./Write.scss";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

interface WriteProps {
  page: number;
  pageHandle: (page: number) => void;
}

const Write = ({ page, pageHandle }: WriteProps) => {
  const pages = [
    "지원자 정보",
    "보호자 정보",
    "사진 등록",
    "학교 정보",
    "전형 선택",
    "성적 계산",
    "자기소개서",
  ];

  let nowPage = useMemo(() => {
    let nowPage = <WriteStudent />;

    if (page === 0) {
      nowPage = <WriteStudent />;
    } else if (page === 1) {
      nowPage = <WriteParent />;
    } else if (page === 2) {
      nowPage = <WritePhoto />;
    } else if (page === 3) {
      nowPage = <WriteSchool />;
    } else if (page === 4) {
      nowPage = <WriteAdmission />;
    } else if (page === 5) {
      nowPage = <WriteGrades />;
    } else if (page === 6) {
      nowPage = <WriteIntroduction />;
    }

    return nowPage;
  }, [page]);

  return (
    <>
      <div className="write">
        <div className="write-box">
          <Steps current={page}>
            {pages.map((title, idx) => (
              <Steps.Step
                title={title}
                key={idx}
                onClick={() => pageHandle(idx)}
                className="pointer"
              />
            ))}
          </Steps>
          {nowPage}
        </div>
      </div>
    </>
  );
};

export default Write;
