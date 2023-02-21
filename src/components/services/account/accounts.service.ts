
import { RestClient } from "../../config/axios";
import { PathApi } from "../../constant/pathApi";

export interface BaseModel<T> {
  content: string;
  statusCode: number;
  data: T;
}

export interface BaseModelPagination<T> {
  totalpage: number;
  pagesize: number;
  pagenumber: number;
  data: T[];
}

export interface Account {
  id: number;
  imageUrl: string;
  email: string;
  fullName: string;
  dob: string;
  telephone: string;
  address: string;
  role: string;
  code: string;
  dateCreate: string;
  status: string;
}

export interface IAccountPagination {
  search: string;
  pagesize: number;
  pagenumber: number;
}

export const fetchAccount = async (
  restAPI: RestClient,
  pagination: IAccountPagination
): Promise<BaseModel<BaseModelPagination<Account>>> => {
  const response = await restAPI.get<BaseModel<BaseModelPagination<Account>>>(
    `${PathApi.accounts}?pagesize=${pagination.pagesize}&pagenumber=${pagination.pagenumber}`
  );
  return response.data;
};
