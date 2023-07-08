import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  free: {
    zamine: [],
    lvlOfInofrmation: {},
    description: '',
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
