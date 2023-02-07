import { createSlice } from '@reduxjs/toolkit';

/* 
interface SelectType {
  value: String,
  label: String,
}

*/

const initialState = {
  baseInformation: {
    nameResume: '', // String
    phonenumber: '', // String
    firstName: '', // String
    lastName: '', // String
    generic: '', // type: SelectType
    vaziatTaahol: '', // type: SelectType
    city: '', // type: SelectType
    nezamVazife: '', // type: SelectType
    birthdayDate: '', // Date
    address: '', // String
  },
  education: {
    gradeEducation: '', // String
    fieldOfStudy: '', // String
    startDate: '', // Date
    endDate: '', // Date
    nameUniversity: '', // String
  },
  workExperience: {
    employmentStatus: '', // String
    employmentTitle: '', // String
    occupationalGroup: '', // String
    companyName: '', // String
    startDate: '', // Date
    endDate: '', // Date
  },
  skill: {
    skills: [], // {name: String, lvl: number, id: number}[]
  },
  furtherInformation: {
    ALittleAboutMe: '', // String
    languages: [], // {id: number, name: String}[]
    certificatesAndCourses: [], // {title: String, issuingInstitution: String, startDate: Date, endDate: Date}[]
    favorites: [], //{id: number, name: String}[]
    contact: [], // {name: String, link: String}[]
  },
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setBaseInformation(state, action) {
      state.baseInformation = action.payload;
    },
    changeBaseInformation(state, action) {
      const { prop, value } = action.payload;
      state.baseInformation[prop] = value;
    },
    setEducation(state, action) {
      state.education = action.payload;
    },
    changeEducation(state, action) {
      const { prop, value } = action.payload;
      state.education[prop] = value;
    },
    setWorkExperience(state, action) {
      state.workExperience = action.payload;
    },
    changeWorkExperience(state, action) {
      const { prop, value } = action.payload;
      state.workExperience[prop] = value;
    },
    setSkill(state, action) {
      state.skill = action.payload;
    },
    changeSkill(state, action) {
      const { prop, value } = action.payload;
      state.skill[prop] = value;
    },
    addSkill(state, action) {
      const skill = action.payload;
      state.skill.skills.push(skill);
    },
    setFutherInformation(state, action) {
      state.furtherInformation = action.payload;
    },
    changeFutherInformation(state, action) {
      const { prop, value } = action.payload;
      state.furtherInformation[prop] = value;
    },
    addLanguageInFurtherInformation(
      state,
      action,
    ) {
      state.furtherInformation.languages.push(
        action.payload,
      );
    },
    addFavoriteInFurtherInformation(
      state,
      action,
    ) {
      state.furtherInformation.favorites.push(
        action.payload,
      );
    },
    addContactInFurtherInformation(
      state,
      action,
    ) {
      state.furtherInformation.contact.push(
        action.payload,
      );
    },
  },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
