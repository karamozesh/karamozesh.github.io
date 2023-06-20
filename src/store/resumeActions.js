const baseInformationSave = (information) => {
  const {
    firstname,
    lastname,
    about_me,
    phone_number,
    gender,
    duty_system,
    martial_status,
    data_of_birth,
    city,
    address,
  } = information;

  const objResume = {
    firstname,
    lastname,
    // about_me: 'nakhondam',
    phonenumber: phone_number,
    gender: gender.value,
    // character: '1',
    duty_system: duty_system.value,
    martial_status: martial_status.value,
    data_of_birth: birthdayDate,
    city: city.value,
    address: address,
    // suggested_salary: 15000,
    // user_id: 4,
  };
  axios
    .post(API_CREATE_CV, objResume, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${user_token}`,
      },
    })
    .then((res) => console.log(res));
  // axios
  //   .post(
  //     API_GET_CVID,
  //     {},
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: user_token,
  //       },
  //     },
  //   )
  //   .then((res) => console.log(res));
};

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
