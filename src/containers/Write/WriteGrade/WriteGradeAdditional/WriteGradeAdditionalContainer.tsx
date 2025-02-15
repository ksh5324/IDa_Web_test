import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import WriteAdditional from "components/Write/WriteAdditional";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { handleGetWriteError } from "lib/handleErrors";

// 성적 가산점 입력
const WriteGradeAdditionalContainer = ({}) => {
  const { store } = useStore();

  const history = useHistory();

  const {
    leadership11,
    leadership12,
    leadership21,
    leadership22,
    leadership31,
    leadership32,
    prize,
    gradeType,
  } = store.WriteStore;

  const { volunteer1, volunteer2, volunteer3 } = store.WriteStore;

  const {
    handleLeadership11,
    handleLeadership12,
    handleLeadership21,
    handleLeadership22,
    handleLeadership31,
    handleLeadership32,
    handleVolunteer1,
    getVolunteer,
    handleVolunteer2,
    handleVolunteer3,
    handlePrize,
    handleIsChanged,
    getAdditional,
  } = store.WriteStore;

  // 가산점 조회
  const getAdditionalCallback = useCallback(async () => {
    await getAdditional()
      .then((res) => {
        handleLeadership11(res.data.leadership11);
        handleLeadership12(res.data.leadership12);
        handleLeadership21(res.data.leadership21);
        handleLeadership22(res.data.leadership22);
        handleLeadership31(res.data.leadership31);
        handleLeadership32(res.data.leadership32);
        handlePrize(res.data.prize);
      })
      .catch((err) => {
        handleGetWriteError(err, history);
      });
  }, []);

  // 봉사시간 조회
  const getVolunteerCallback = useCallback(() => {
    getVolunteer().then((res) => {
      handleVolunteer1(res.data.volunteer1);
      handleVolunteer2(res.data.volunteer2);
      handleVolunteer3(res.data.volunteer3);
    });
  }, []);

  useEffect(() => {
    getAdditionalCallback();
  }, [getAdditionalCallback]);

  useEffect(() => {
    getVolunteerCallback();
  }, [getVolunteerCallback]);

  return (
    <>
      <WriteAdditional
        leadership11={leadership11}
        leadership12={leadership12}
        leadership21={leadership21}
        leadership22={leadership22}
        leadership31={leadership31}
        leadership32={leadership32}
        prize={prize}
        volunteer1={volunteer1}
        volunteer2={volunteer2}
        volunteer3={volunteer3}
        gradeType={gradeType}
        handleIsChanged={handleIsChanged}
        handleLeadership11={handleLeadership11}
        handleLeadership12={handleLeadership12}
        handleLeadership21={handleLeadership21}
        handleLeadership22={handleLeadership22}
        handleLeadership31={handleLeadership31}
        handleLeadership32={handleLeadership32}
        handleVolunteer1={handleVolunteer1}
        handleVolunteer2={handleVolunteer2}
        handleVolunteer3={handleVolunteer3}
        handlePrize={handlePrize}
      />
    </>
  );
};

export default observer(WriteGradeAdditionalContainer);
