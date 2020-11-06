import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Panda } from "../../types";

interface pandaState {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}

export const initialState: pandaState = {
  data: [],
  fetching: false,
  error: undefined,
};

//Slice
export const pandasSlice = createSlice({
  name: "pandas",
  initialState,
  reducers: {
    /* setPanda(state: pandaState, { payload }) {
      state.data = payload;
    },*/
    loadPandasRequest(state: pandaState) {
      state.data = [];
      state.fetching = true;
      state.error = undefined;
    },
    loadPandasSuccess(state: pandaState, action: PayloadAction<Panda[]>) {
      state.data = action.payload;
      state.fetching = false;
      state.error = undefined;
    },
    loadPandasFailure(state: pandaState, action: PayloadAction<Error>) {
      state.data = [];
      state.fetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  /*setPanda,*/
  loadPandasRequest,
  loadPandasSuccess,
  loadPandasFailure,
} = pandasSlice.actions;

export default pandasSlice.reducer;
