import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { http } from "../../util/config";
import { DispatchType } from "../configStore";
//  job Search , job categories
export interface JobList {
  id: number;
  congViec: CongViec;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViec {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}
// category
export interface JobMenu {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}

export interface DsNhomChiTietLoai {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: DsChiTietLoai[];
}

export interface DsChiTietLoai {
  id: number;
  tenChiTiet: string;
}

// initial state
type JobState = {
  arrSearch: JobList[];
  arrPagination: any[];
  arrMenu: JobMenu[];
  arrCategories: JobList[];
  JobType: JobMenu[];
};
const initialState: JobState = {
  arrSearch: [],
  arrPagination: [],
  arrMenu: [],
  arrCategories: [],
  JobType: [],
};

const JobManagementReducer = createSlice({
  name: "JobManagementReducer",
  initialState,
  reducers: {
    JobTypeAction: (state: JobState, action: PayloadAction<JobMenu[]>) => {
      state.JobType = action.payload;
      console.log(state.JobType);
    },
    JobCategoriesAction: (
      state: JobState,
      action: PayloadAction<JobList[]>
    ) => {
      state.arrCategories = action.payload;
    },
    SearchArrAction: (state: JobState, action: PayloadAction<JobList[]>) => {
      state.arrSearch = action.payload;
    },
    MenuArrAction: (state: JobState, action: PayloadAction<JobMenu[]>) => {
      state.arrMenu = action.payload;
    },
    PaginationAction: (state: JobState, action: PayloadAction<any>) => {
      state.arrPagination = action.payload;
    },
  },
});

export const {
  JobTypeAction,
  SearchArrAction,
  PaginationAction,
  MenuArrAction,
  JobCategoriesAction,
} = JobManagementReducer.actions;

export default JobManagementReducer.reducer;

export const getSearchApi = (params: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${params}`
    );
    dispatch(SearchArrAction(result.data.content));
  };
};
export const getJobMenuApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/cong-viec/lay-menu-loai-cong-viec");
    dispatch(MenuArrAction(result.data.content));
  };
};
export const getCategoriesApi = (id: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
    );
    dispatch(JobCategoriesAction(result.data.content));
  };
};
export const getJobTypeApi = (id: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
    );
    dispatch(JobTypeAction(result.data.content));
  };
};
