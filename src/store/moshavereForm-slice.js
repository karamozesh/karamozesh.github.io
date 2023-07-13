import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ADD_TICKET } from '../api/configAPI';

export const addTicketFree = createAsyncThunk(
  'moshavereForm/addTicketFree',
  async ({ user_token, data }) => {
    console.log(user_token, data);

    const {
      zamine,
      lvlOfInofrmation,
      files,
      contactWay,
      timeMoshavere,
      question,
      title,
    } = data;

    const validData = {
      title: title,
      skill_level: lvlOfInofrmation,
      meeting_date: timeMoshavere,
      question: question,
      tags: zamine,
      contact_way: contactWay,
    };

    const response = axios.post(
      API_ADD_TICKET,
      JSON.stringify(validData),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user_token}`,
        },
      },
    );
    const { ticket_id } = await response.data;

    console.log(ticket_id);
  },
);

const initialState = {
  free: {
    zamine: [],
    lvlOfInofrmation: {},
    title: '',
    question: '',
    files: [],
    contactWay: {},
    timeMoshavere: '',
  },
  vip: {
    zamine: [],
    lvlOfInofrmation: {},
    description: '',
    files: [],
    contactWay: {},
    noeEshterak: {},
    plan: { id: 1, name: 'یک ماهه', value: '1' },
  },
};

const moshavereFormSlice = createSlice({
  name: 'moshavereForm',
  initialState,
  reducers: {
    changeFreeProp(state, action) {
      const { prop, value } = action.payload;
      state.free[prop] = value;
    },
    changeVipProp(state, action) {
      const { prop, value } = action.payload;
      state.vip[prop] = value;
    },
  },
});

export const moshavereFormActions =
  moshavereFormSlice.actions;
export default moshavereFormSlice.reducer;
