import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypeAdminAdd } from "../../page/Admin/Manage/ManageJobType";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";
export interface JobTypeAdmin {
  id: number;
  tenLoaiCongViec: string;
}
export interface JobService {
  id: number;
  maCongViec: number;
  maNguoiThue: number;
  ngayThue: string;
  hoanThanh: boolean;
}
type AdminState = {
  AdminJobType: JobTypeAdmin[];
  AdminJobService: JobService[];
};
const initialState: AdminState = {
  AdminJobType: [],
  AdminJobService: [],
};

const AdminReducer = createSlice({
  name: "AdminReducer",
  initialState,
  reducers: {
    arrJobTypeAction: (
      state: AdminState,
      action: PayloadAction<JobTypeAdmin[]>
    ) => {
      state.AdminJobType = action.payload;
    },
    arrJobServiceAction: (
      state: AdminState,
      action: PayloadAction<JobService[]>
    ) => {
      state.AdminJobService = action.payload;
    },
  },
});

export const { arrJobTypeAction, arrJobServiceAction } = AdminReducer.actions;
// manage jobtype
export const getAdminJobTypeApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/loai-cong-viec");
    dispatch(arrJobTypeAction(result.data.content));
  };
};
export const addAdminJobTypeApi = (values: JobTypeAdminAdd) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.post(`/api/loai-cong-viec`, values);
      dispatch(getAdminJobTypeApi());
      alert("Success");
    } catch (err) {
      alert("Fail");
    }
  };
};
export const deleteAdminJobTypeApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.delete(`/api/loai-cong-viec/${id}`);

      dispatch(getAdminJobTypeApi());
    } catch (err) {
      console.log(err);
    }
  };
};
export const putAdminJobTypeApi = (payload: JobTypeAdmin) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.put(`/api/loai-cong-viec/${payload.id}`, payload);
      alert("Success");
      dispatch(getAdminJobTypeApi());
    } catch (err) {
      alert("Fail");
    }
  };
};

// manage service
export const getAdminJobServiceApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/thue-cong-viec");
    dispatch(arrJobServiceAction(result.data.content));
  };
};
export const addAdminServiceApi = (values: JobService) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.post(`/api/thue-cong-viec`, values);
      dispatch(getAdminJobServiceApi());
      alert("Success");
    } catch (err) {
      alert("Fail");
    }
  };
};

export const deleteAdminServiceApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.delete(`/api/thue-cong-viec/${id}`);
      alert("Success");

      dispatch(getAdminJobServiceApi());
    } catch (err) {
      alert("Fail");
    }
  };
};

export const putAdminJobServiceApi = (payload: JobService) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.put(`/api/thue-cong-viec/${payload.id}`, payload);

      dispatch(getAdminJobServiceApi());
    } catch (err) {
      alert("Fail");
    }
  };
};

export default AdminReducer.reducer;
