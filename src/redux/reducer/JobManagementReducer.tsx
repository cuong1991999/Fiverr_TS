import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

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
type JobState = {
  arrSearch: JobList[];
  arrPagination: JobList[];
};
const initialState: JobState = {
  arrSearch: [],
  arrPagination: [],
};

const JobManagementReducer = createSlice({
  name: "JobManagementReducer",
  initialState,
  reducers: {
    SearchArrAction: (state: JobState, action: PayloadAction<JobList[]>) => {
      state.arrSearch = action.payload;
    },
    PaginationAction: (state: JobState, action: PayloadAction<JobList[]>) => {
      state.arrPagination = action.payload;
    },
  },
});

export const { SearchArrAction, PaginationAction } =
  JobManagementReducer.actions;

export default JobManagementReducer.reducer;

export const getSearchApi = (params: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${params}`
    );
    dispatch(SearchArrAction(result.data.content));
  };
};
