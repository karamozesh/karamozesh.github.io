import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ADD_TICKET } from '../api/configAPI';
import { notificationActions } from './notification-slice';
import { ticketActions } from './ticket-slice';

export const addTicketFree = createAsyncThunk(
  'moshavereForm/addTicketFree',
  async (
    { user_token, data, cb },
    { dispatch },
  ) => {
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

    try {
      const response = await axios.post(
        API_ADD_TICKET,
        JSON.stringify(validData),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user_token}`,
          },
        },
      );
      const ticketObj = await response.data;

      const tagsArray = ticketObj.tags.map(
        (tag) => ({ name: tag }),
      );
      const id = ticketObj.ticket_id;
      const status = '1';
      const messages = [
        {
          created_time: new Date().toString(),
          question: question,
        },
      ];
      dispatch(
        ticketActions.addTicket({
          ...ticketObj,
          tags: tagsArray,
          id,
          status,
          messages,
        }),
      );
      dispatch(
        notificationActions.changeSuccess({
          message: 'تیکت با موفقیت ساخته شد.',
          exist: true,
        }),
      );
      cb();
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          message: 'ساخت تیکت دچار مشکل شد.',
          exist: true,
        }),
      );
    }
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
