import { createSlice } from "@reduxjs/toolkit";
import { fetchAccountApi } from "./account.action";
import { Account, BaseModel, BaseModelPagination } from "./accounts.service";

export interface AccountState {
  result: BaseModelPagination<Account>;
  status: boolean;
}

const initialState: AccountState = {
  result: {
    pagenumber: 0,
    totalpage: 1,
    pagesize: 0,
    data: [],
  },
  status: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list account
    builder.addCase(fetchAccountApi.pending, (state) => {
      state.status = true;
    });
    builder.addCase(fetchAccountApi.fulfilled, (state, action) => {
      state.status = false;
      state.result = (
        action.payload as BaseModel<BaseModelPagination<Account>>
      ).data;
    });
    builder.addCase(fetchAccountApi.rejected, (state) => {
      state.status = false;
    });
  },
});

export const {} = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
