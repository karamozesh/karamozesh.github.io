import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {
  API_GET_MOSHAVER_ALL_TICKETS,
  API_GET_MOSHAVER_OWN_TICKETS,
  API_GET_USER_TICKETS,
  API_TICKET_END,
  API_TICKET_SEND_MESSAGE,
  POST_CONFIG,
} from '../api/configAPI';
import axios from 'axios';
import { notificationActions } from './notification-slice';

const SUCCESS_MESSAGE = {
  SEND_MESSAGE: 'پیام ارسال شد.',
  END_TICKET: 'تیکت اتمام یافت',
};

const ERROR_MESSAGE = {
  SEND_MESSAGE: 'ارسال پیام با مشکل مواجه شد.',
  END_TICKET: 'اتمام تیکت دچار مشکل شد.',
};

const initialState = {
  tickets: [],
  allTickets: [],
  ownTickets: [],
};

export const getUserTickets = createAsyncThunk(
  'tickets/getUserTickets',
  async ({ user_token }, { dispatch }) => {
    const response = await axios.get(
      API_GET_USER_TICKETS,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user_token}`,
        },
      },
    );

    const tickets = await response.data;

    dispatch(ticketActions.setTickets(tickets));
  },
);

export const ticketSendMessage = createAsyncThunk(
  'tickets/ticketSendMessage',
  async ({ user_token, data }, { dispatch }) => {
    const { ticketId: ticket_id, message } = data;

    const validData = { ticket_id, message };

    try {
      const response = await axios.post(
        API_TICKET_SEND_MESSAGE,
        JSON.stringify(validData),
        POST_CONFIG(user_token),
      );

      const data = await response.data;

      const created_time = new Date();

      dispatch(
        ticketActions.addQuestion({
          ...data,
          created_time: created_time.toString(),
        }),
      );
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message: ERROR_MESSAGE.SEND_MESSAGE,
        }),
      );
    }
  },
);

export const ticketEnd = createAsyncThunk(
  'tickets/ticketEnd',
  async ({ user_token, data }, { dispatch }) => {
    const { ticketId: ticket_id } = data;

    const validData = { ticket_id };

    try {
      const response = await axios.post(
        API_TICKET_END,
        JSON.stringify(validData),
        POST_CONFIG(user_token),
      );

      const data = await response.data;
      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message: SUCCESS_MESSAGE.END_TICKET,
        }),
      );
    } catch (error) {
      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message: ERROR_MESSAGE.END_TICKET,
        }),
      );
    }
  },
);

export const getMoshaverAllTickets =
  createAsyncThunk(
    'tickets/getMoshaverTickets',
    async (user_token, { dispatch }) => {
      const response = await axios.get(
        API_GET_MOSHAVER_ALL_TICKETS,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user_token}`,
          },
        },
      );

      const tickets = await response.data;

      dispatch(
        ticketActions.setAllTickets(tickets),
      );
    },
  );

export const getMoshaverOwnTickets =
  createAsyncThunk(
    'tickets/getMoshaverTickets',
    async (user_token, { dispatch }) => {
      const response = await axios.get(
        API_GET_MOSHAVER_OWN_TICKETS,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user_token}`,
          },
        },
      );

      const tickets = await response.data;

      dispatch(
        ticketActions.setOwnTickets(tickets),
      );
    },
  );

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets(state, action) {
      state.tickets = action.payload;
    },
    addTicket(state, action) {
      const newTicket = action.payload;
      const updatedTickets = [...state.tickets];
      updatedTickets.push(newTicket);

      state.tickets = updatedTickets;
    },
    addQuestion(state, action) {
      const { ticket_id, created_time, message } =
        action.payload;

      console.log(action.payload);

      let updatedTickets = [...state.tickets];

      const ticketSelectedIndex =
        updatedTickets.findIndex(
          (ticket) => +ticket.id === +ticket_id,
        );

      const ticketSelected =
        state.tickets[ticketSelectedIndex];

      ticketSelected.messages.push({
        created_time,
        question: message,
      });
      updatedTickets[ticketSelectedIndex] =
        ticketSelected;

      state.tickets = updatedTickets;
    },
    setAllTickets(state, action) {
      state.allTickets = action.payload;
    },
    setOwnTickets(state, action) {
      state.ownTickets = action.payload;
    },
  },
});

export const ticketActions = ticketSlice.actions;
export default ticketSlice.reducer;
