import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypeAdminAdd } from "../../page/Admin/Manage/ManageJobType";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";
import { ArrComments } from "./JobManagementReducer";
import { history } from "../../index";
import { UserAdd } from "../../page/Admin/Manage/ManageUser";
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
export interface JobAdmin {
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
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  role: string;
  certification: string[];
  gender: boolean;
  skill: string[];
}
type AdminState = {
  AdminJobType: JobTypeAdmin[];
  AdminJobService: JobService[];
  AdminComment: ArrComments[];
  AdminJob: JobAdmin[];
  AdminUser: User[];
};
const initialState: AdminState = {
  AdminJobType: [],
  AdminJobService: [],
  AdminComment: [],
  AdminJob: [],
  AdminUser: [],
};
export interface Admin {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  role: string;
  certification: string;
  gender: boolean;
  skill: string;
}

const AdminReducer = createSlice({
  name: "AdminReducer",
  initialState,
  reducers: {
    arrJobAction: (state: AdminState, action: PayloadAction<JobAdmin[]>) => {
      state.AdminJob = action.payload;
    },
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
    arrCommentAction: (
      state: AdminState,
      action: PayloadAction<ArrComments[]>
    ) => {
      state.AdminComment = action.payload;
    },
    arrUserAction: (state: AdminState, action: PayloadAction<User[]>) => {
      state.AdminUser = action.payload;
    },
  },
});

export const {
  arrJobTypeAction,
  arrJobServiceAction,
  arrCommentAction,
  arrJobAction,
  arrUserAction,
} = AdminReducer.actions;
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
//manage job
export const getAdminJobApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/cong-viec");
    dispatch(arrJobAction(result.data.content));
  };
};
export const addAdminJobApi = (values: JobAdmin) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.post(`/api/cong-viec`, values);
      dispatch(getAdminJobApi());
      alert("Success");
    } catch (err) {
      alert("Fail");
    }
  };
};

export const deleteAdminJobApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.delete(`/api/cong-viec/${id}`);
      alert("Success");

      dispatch(getAdminJobApi());
    } catch (err) {
      alert("Fail");
    }
  };
};

export const putAdminJobApi = (payload: JobAdmin) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.put(`/api/cong-viec/${payload.id}`, payload);

      dispatch(getAdminJobApi());
    } catch (err) {
      alert("Fail");
    }
  };
};

// comment
export const getCommentAdminApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/binh-luan");
    dispatch(arrCommentAction(result.data.content));
  };
};
export const deleteCommentApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.delete(`/api/binh-luan/${id}`);
      alert("Success");

      dispatch(getCommentAdminApi());
    } catch (err) {
      alert("Fail");
    }
  };
};
//manage user
export const getAdminUserApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/users");
    dispatch(arrUserAction(result.data.content));
  };
};
export const addAdminUserApi = (value: UserAdd) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.post("/api/users", value);
      dispatch(getAdminUserApi());
      alert("Success");
    } catch (err) {
      alert("Fail");
    }
  };
};
export const deleteAdminUserApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      console.log(id);

      await http.delete(`/api/users?id=${id}`);
      dispatch(getAdminUserApi());
    } catch (err) {
      console.log(id);

      alert("Fail");
    }
  };
};
export const putAdminUserApi = (payload: User) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.put(`/api/users/${payload.id}`, payload);
      dispatch(getAdminUserApi());
      alert("Success");
    } catch (err) {
      alert("Fail");
    }
  };
};
export default AdminReducer.reducer;
