const educationSave = (information) => {
  const {
    gradeEducation,
    fieldOfStudy,
    // startDate,
    // endDate,
    nameUniversity,
  } = information;
};

const furtherInformationContent = (
  information,
) => {
  const {
    ALittleAboutMe,
    languages,
    certificatesAndCourses,
    favorites,
    contact,
  } = information;

  const furtherInformationObj = information;
  axios.post(API_CREATE_CV, objResume, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user_token}`,
    },
  });
};

const skillsContent = (information) => {
  const { skills } = information;
};

const workExperienceContent = (information) => {
  const {
    employmentStatus,
    employmentTitle,
    occupationalGroup,
    companyName,
    startDate,
    endDate,
  } = information;
};

export const saveInformationResume = (
  section,
  information,
) => {};
