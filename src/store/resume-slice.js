import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { API_CREATE_CV } from '../api/configAPI';
import axios from 'axios';

/* 
interface SelectType {
  value: number,
  label: String,
}

interface CityType {
  value: String,
  label: String,
}

*/

export const createResume = createAsyncThunk(
  'resume/createResume',
  async (data, { dispatch }) => {
    const {
      user_token,
      nameResume: about_me,
      phonenumber: phone_number,
      firstName: firstname,
      lastName: lastname,
      generic: gender,
      vaziatTaahol: martial_status,
      city: city,
      nezamVazife: duty_system,
      birthdayDate: data_of_birth,
      address: address,
    } = data;

    const valid_obj = {
      about_me,
      phone_number,
      firstname,
      lastname,
      gender,
      martial_status,
      city,
      duty_system,
      data_of_birth,
      address,
      user_id: 5,
    };

    const res = await axios
      .post(
        API_CREATE_CV,
        JSON.stringify(valid_obj),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${'b295a8f55795efade9f71c3cb0136e246648d0ba'}`,
          },
        },
      )
      .then((res) => console.log(res));
    console.log(res);
  },
);

const initialState = {
  cv_id: '',
  baseInformation: {
    nameResume: '', // String
    phonenumber: '', // String
    firstName: '', // String
    lastName: '', // String
    generic: '', // type: SelectType
    vaziatTaahol: '', // type: SelectType
    city: '', // type: CityType
    nezamVazife: '', // type: SelectType
    birthdayDate: '', // Date
    address: '', // String
    image: null,
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
    setCVID(state, action) {
      state.cv_id = action.payload;
    },
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
