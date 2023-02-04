import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseInformation: {
    name_resume: '', // String
    phonenumber: '', // String
    first_name: '', // String
    last_name: '', // String
    generic: '', // String
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
    skills: [], // String[]
  },
  furhterInformation: {
    ALittleAboutMe: '', // String
    languages: [], // String[]
    certificatesAndCourses: [], // {title: String, issuingInstitution: String, startDate: Date, endDate: Date}[]
    favorites: [], //String[]
    contact: [], // {name: String, link: String}[]
  },
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addBaseInformation(state, action) {
      state.baseInformation = action.payload;
    },
    changeBaseInformation(state, action) {
      const { prop, value } = action.payload;
      state.baseInformation[prop] = value;
    },
    addEducation(state, action) {
      state.education = action.payload;
    },
    changeEducation(state, action) {
      const { prop, value } = action.payload;
      state.education[prop] = value;
    },
    addWorkExperience(state, action) {
      state.workExperience = action.payload;
    },
    changeWorkExperience(state, action) {
      const { prop, value } = action.payload;
      state.workExperience[prop] = value;
    },
    addSkill(state, action) {
      state.skill = action.payload;
    },
    changeSkill(state, action) {
      const { prop, value } = action.payload;
      state.skill[prop] = value;
    },
    addFutherInformation(state, action) {
      state.furhterInformation = action.payload;
    },
    changeFutherInformation(state, action) {
      const { prop, value } = action.payload;
      state.furhterInformation[prop] = value;
    },
  },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;