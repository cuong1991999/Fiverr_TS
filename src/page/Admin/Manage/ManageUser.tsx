import React from 'react'

type Props = {}

const ManageUser = (props: Props) => {
  return (
    <div>ManageUser</div>
  )
}

export default ManageUser
// import { type } from 'os'
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/configStore';
// import Pagination from "../../../components/Pagination/Pagination";

// type Props = {}
// export type UserAdmin = {
//   id: number;
//   name: string;
//   password: string;
//   phone: string;
//   birthday: string;
//   avatar: string;
//   gender: boolean;
//   role: string;
//   skill: Array<null | string> | null;
//   certification: Array<null | string> | null;
//   bookingJob: string[];
// }
// const ManageUser = (props: Props) => {
//   const { editUser } = useSelector(
//     (state: RootState) => state.AdminReducer
//   );
//   const {arrPagination} = useSelector(
//     (state: RootState) => state.userReducer
//   )
//   const getAdminUser = () => {
//   }
//   return (
//     <div>ManageUser</div>
//   )
// }

// export default ManageUser