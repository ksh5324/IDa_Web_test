enum ApplyDetail {
  /**
   * 일반 전형
   */
  COMMON = "COMMON",

  /**
   * 특별 전형
   */

  // 마이스터 인재 전형
  MEISTER = "MEISTER",
  // 지역 우선 전형
  CITY_FIRST = "CITY_FIRST",
  // 국민기초생활수급자
  BASIC_LIVELIHOOD = "BASIC_LIVELIHOOD",
  // 차상위 계층
  WELFARE_RECIPIENTS = "WELFARE_RECIPIENTS",
  // 국가 보훈 대상자
  VERTERANS = "VERTERANS",
  // 한부모 가족 보호 대상자
  ONE_PARENT = "ONE_PARENT",
  // 차차상위 계층
  HIGH_WELFARE_RECIPIENTS = "HIGH_WELFARE_RECIPIENTS",
  // 학교장이 추천한 경제적으로 어려운 학생
  FINANCIAL_PERSON = "FINANCIAL_PERSON",
  // 특수교육대상자
  SPECIAL_TRAINING = "SPECIAL_TRAINING",
  // 북한이탈주민
  NORTH_KOREAN_CHILD = "NORTH_KOREAN_CHILD",
  // 다문화가정
  MULTICULTURAL = "MULTICULTURAL",
  // 아동복지시설수용자
  CHILD_WELFARE = "CHILD_WELFARE",
  // 소년소녀 가장 = "", 조손가정 자녀
  SOCIAL_TEEN_HOUSEHOLDER = "SOCIAL_TEEN_HOUSEHOLDER",
  // 순직 공무원의 자녀
  CIVIL_SERVANT_ON_DUTY = "CIVIL_SERVANT_ON_DUTY",
  // 장애인(장애인 등록증 5급 이내) 가정 가족 구성원
  FAMILY_WITH_DISABILITIES = "FAMILY_WITH_DISABILITIES",
  // 농어촌거주
  FARMING_AND_FISHING = "FARMING_AND_FISHING",
  // 직업군인 자녀
  SOLDIER_CHILD = "SOLDIER_CHILD",
  // 경찰․소방․교정 공무원 자녀
  CIVIL_SERVANT_CHILD = "CIVIL_SERVANT_CHILD",
  // 산업재해근로자 자녀
  INDUSTRIAL_ACCIDENT_CHILD = "INDUSTRIAL_ACCIDENT_CHILD",
  // 환경미하원 자녀
  STREET_CLEANERS_CHILD = "STREET_CLEANERS_CHILD",
  // 우편집배원 자녀
  MAILMAN_CHILD = "MAILMAN_CHILD",
  // 무형문화재보유자 자녀
  HAS_CULTURAL_HERITAGE = "HAS_CULTURAL_HERITAGE",
  // 입양자녀ㆍ입양가족 자녀
  ADOPTED_FAMILY = "ADOPTED_FAMILY",
  // 한부모가정 자녀 = "", 다자녀가정 자녀
  MULTI_CHILD_FAMILIES = "MULTI_CHILD_FAMILIES",

  /**
   * 특례 입학
   */

  // 외국 교육 이수자
  FOREIGN_EDUCATION = "FOREIGN_EDUCATION",
  // 중학 학력 인증자
  MIDDLE_SCHOOL_EDUCATION = "MIDDLE_SCHOOL_EDUCATION",

  /**
   * 정원 외 특례입학
   */

  // 북한 이탈 주민
  NORTH_KOREAN_DEFECTORS = "NORTH_KOREAN_DEFECTORS",
  // 외국 학교 전학자
  FOREIGN_SCHOOL = "FOREIGN_SCHOOL",
}
export default ApplyDetail;
