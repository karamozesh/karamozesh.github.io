import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import {
  API_ADD_EDU_CV,
  API_ADD_WORK_CV,
  API_CREATE_CV,
} from '../api/configAPI';
import axios from 'axios';
import { notificationActions } from './notification-slice';

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

const ERROR_MESSAGE =
  'مشکلی در ذخیره اطلاعات پیش آمده است';
const SUCCESS_MESSAGE = 'تغییرات ذخیره شد.';

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

    try {
      const res = await axios.post(
        API_CREATE_CV,
        JSON.stringify(valid_obj),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-origin': '*',
          },
        },
      );
      const cvId = await res.data;
      dispatch(resumeActions.setCVID(cvId));
      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message: SUCCESS_MESSAGE,
        }),
      );
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message: ERROR_MESSAGE,
        }),
      );
    }
  },
);

export const sendEducationInfo = createAsyncThunk(
  'resume/sendEducationInfo',
  async (data, { dispatch }) => {
    const {
      gradeEducation: grade,
      fieldOfStudy: field_of_study,
      startDate: start_date,
      endDate: end_date,
      nameUniversity: university,
      cv_id,
    } = data;

    const valid_obj = {
      grade,
      field_of_study,
      start_date,
      end_date,
      university,
      cv_id,
    };

    try {
      await axios.post(
        API_ADD_EDU_CV(cv_id),
        JSON.stringify(valid_obj),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message: SUCCESS_MESSAGE,
        }),
      );
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message: ERROR_MESSAGE,
        }),
      );
    }
  },
);

export const sendWorkExperienceInfo =
  createAsyncThunk(
    'resume/sendWorkExperienceInfo',
    async (data, { dispatch }) => {
      const {
        employmentTitle: title, // String
        occupationalGroup: industry, // String
        companyName: company, // String
        startDate: start_date, // Date
        endDate: end_date, // Date
      } = data;

      const valid_obj = {
        title,
        industry,
        company,
        start_date,
        end_date,
        cv_id: 1,
      };

      try {
        await axios.post(
          API_ADD_EDU_CV(cv_id),
          JSON.stringify(valid_obj),
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-origin': '*',
            },
          },
        );

        dispatch(
          notificationActions.changeSuccess({
            exist: true,
            message: SUCCESS_MESSAGE,
          }),
        );
      } catch (error) {
        dispatch(
          notificationActions.changeError({
            exist: true,
            message: ERROR_MESSAGE,
          }),
        );
      }
    },
  );

export const sendSkills = createAsyncThunk(
  'resume/createResume',
  async (data, { dispatch }) => {
    try {
      const response = await axios.post(
        API_ADD_WORK_CV(cv_id),
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const skillObj = response.data;
      dispatch(
        resumeActions.addSkill({
          lvl: 1,
          ...skillObj,
        }),
      );
      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message: 'مهارت اضافه شد.',
        }),
      );
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message:
            'مشکلی در اضافه شدن مهارت ایجاد شد.',
        }),
      );
    }
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
