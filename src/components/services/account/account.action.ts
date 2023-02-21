import { createAsyncThunk } from '@reduxjs/toolkit';
import restAPI from '../../config/axios';
import { fetchAccountsAction } from './account.type.action';
import { fetchAccount, IAccountPagination } from './accounts.service';
export const fetchAccountApi = createAsyncThunk(fetchAccountsAction, async (pagination: IAccountPagination) => {
  try {
    const response = await fetchAccount(restAPI, pagination);
    return response;
  } catch (error) {
    return error;
  }
});
