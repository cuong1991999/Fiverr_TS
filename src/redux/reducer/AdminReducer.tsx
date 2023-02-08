import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypeAdminAdd } from "../../page/Admin/Manage/ManageJobType";
import { getStore, http, USER_ID } from "../../util/config";
import { DispatchType } from "../configStore";
export interface JobTypeAdmin {
  id: number;
  tenLoaiCongViec: string;
}

type AdminState = {
  AdminJobType: JobTypeAdmin[];
};
const initialState: AdminState = {
  AdminJobType: [],
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
  },
});

export const { arrJobTypeAction } = AdminReducer.actions;
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
    } catch (err) {
      console.log(err);
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

      dispatch(getAdminJobTypeApi());
    } catch (err) {
      console.log(err);
    }
  };
};
export default AdminReducer.reducer;
