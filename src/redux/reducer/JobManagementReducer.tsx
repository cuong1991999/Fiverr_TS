import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Comment } from "../../page/JobDetail/JobDetail";

import { http, timeout } from "../../util/config";
import { DispatchType } from "../configStore";

//  job Search , job categories, jobdetail
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
// jobdetail
export interface ArrComments {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}

// initial state
type JobState = {
  arrSearch: JobList[];
  arrPagination: any[];
  arrMenu: JobMenu[];
  arrCategories: JobList[];
  JobType: JobMenu[];
  detail: JobList[];
  arrComment: ArrComments[];
};
const initialState: JobState = {
  arrSearch: [],
  arrPagination: [],
  arrMenu: [],
  arrCategories: [],
  JobType: [],
  detail: [],
  arrComment: [],
};

const JobManagementReducer = createSlice({
  name: "JobManagementReducer",
  initialState,
  reducers: {
    JobTypeAction: (state: JobState, action: PayloadAction<JobMenu[]>) => {
      state.JobType = action.payload;
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
    JobdetailAction: (state: JobState, action: PayloadAction<JobList[]>) => {
      state.detail = action.payload;
    },
    ArrCommentAction: (
      state: JobState,
      action: PayloadAction<ArrComments[]>
    ) => {
      state.arrComment = action.payload;
    },
  },
});

export const {
  JobTypeAction,
  SearchArrAction,
  PaginationAction,
  MenuArrAction,
  JobCategoriesAction,
  JobdetailAction,
  ArrCommentAction,
} = JobManagementReducer.actions;

export default JobManagementReducer.reducer;

export const getSearchApi = (params: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${params}`
    );
    dispatch(SearchArrAction(result.data.content));
  };
};
export const getJobMenuApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/cong-viec/lay-menu-loai-cong-viec");
    dispatch(MenuArrAction(result.data.content));
  };
};
export const getCategoriesApi = (id: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
    );
    dispatch(JobCategoriesAction(result.data.content));
  };
};
export const getJobTypeApi = (id: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
    );
    dispatch(JobTypeAction(result.data.content));
  };
};
export const getJobDetailApi = (id: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/api/cong-viec/lay-cong-viec-chi-tiet/${id}`
    );
    dispatch(JobdetailAction(result.data.content));
  };
};

export const getArrCommentApi = (id: string | number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(
        `/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`
      );
      dispatch(ArrCommentAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
export const postCommentApi = (payload: Comment) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.post(`/api/binh-luan`, payload);
      await timeout(1000);
      dispatch(getArrCommentApi(payload.maCongViec));
    } catch (error) {
      console.log(error);
    }
  };
};
export const postCartApi = (payload: Cart) => {
  return async () => {
    try {
      alert("Successful request");
      await http.post(`/api/thue-cong-viec`, payload);
    } catch (error) {
      console.log(error);
      alert("Request failed");
    }
  };
};
