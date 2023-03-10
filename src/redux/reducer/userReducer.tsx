//rxslice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import {
  http,
  getStoreJson,
  setCookie,
  setStoreJson,
  ACCESS_TOKEN,
  USER_LOGIN,
  USER_ID,
  setStore,
} from "../../util/config";
import { UserRegister } from "../../page/register/Register";

//Register dùng chung với Profile
export interface UserProfile {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
}

export interface UserLogin {
  email: string;
  accessToken: string;
  password: string;
}
export interface JobRent {
  id: number;
  ngayThue: string;
  hoanThanh: boolean;
  congViec: CongViec;
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
type UserState = {
  userRegister: UserProfile | null;
  userLogin: UserProfile | null;
  userProfile: UserProfile | null;

  arrJobRent: JobRent[];
};

const initialState: UserState = {
  userRegister: null,
  userLogin: getStoreJson(USER_LOGIN),
  userProfile: null,
  arrJobRent: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    registerAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userRegister = action.payload;
    },
    loginAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
    getProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfile>
    ) => {
      state.userProfile = action.payload;
    },
    updateProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfile>
    ) => {
      state.userProfile = action.payload;
    },
    arrJobRentAction: (state: UserState, action: PayloadAction<JobRent[]>) => {
      state.arrJobRent = action.payload;
    },
  },
});

export const {
  registerAction,
  loginAction,
  getProfileAction,
  updateProfileAction,
  arrJobRentAction,
} = userReducer.actions;

export default userReducer.reducer;

export const registerApi = (newUserData: UserRegister) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post("/api/auth/signup", newUserData);
      console.log(result);

      if (result?.status === 200) {
        const action = registerAction(result.data.content);
        dispatch(action);
        window.confirm("Successful register!");
        window.location.href = "/login";
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 400) {
        window.confirm("Email is already existed!");
      }
    }
  };
};

export const loginApi = (userLogin: UserLogin) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post("/api/auth/signin", userLogin);
      const action = loginAction(result.data.content.user);
      if (result.status === 200) {
        console.log("login", result.data.content.user);
        dispatch(action);
        console.log(result);
        setStoreJson(USER_LOGIN, result.data.content.user);
        setCookie(ACCESS_TOKEN, result.data.content.token, 3);
        setStore(ACCESS_TOKEN, result.data.content.token);
        setStore(USER_ID, result.data.content.user.id);
        window.location.href = "/home";
      }
    } catch (error) {
      alert("Login failed, username or password is incorrect");
      console.log(error);
    }
  };
};

export const getProfileApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/api/users/${id}`);
      const action = getProfileAction(result.data.content);
      console.log("get");

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfileApi = (id: number, updatedData: UserProfile) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.put(`/api/users/${id}`, updatedData);
      const action = updateProfileAction(result.data.content);
      console.log("update: ", result);

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getJobrentApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/thue-cong-viec/lay-danh-sach-da-thue");
    dispatch(arrJobRentAction(result.data.content));
  };
};
export const delJobrentApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.delete(`/api/thue-cong-viec/${id}`);
      dispatch(getJobrentApi());
    } catch (error) {
      console.log(error);
    }
  };
};
