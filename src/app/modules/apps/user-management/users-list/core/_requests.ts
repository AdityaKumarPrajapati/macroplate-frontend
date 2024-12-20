import axios, { AxiosResponse } from "axios";
import axiosInstance from "../../../../../../_metronic/helpers/axiosInstance";
import { ID, Response } from "../../../../../../_metronic/helpers";
import { User, UsersQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_LARAVEL_API_URL;
const USER_URL = `${API_URL}/api/user`;
// const GET_USERS_URL = `${API_URL}/users/query`;
const GET_USERS_URL = `${API_URL}/api/all-users`;
const GET_USERS_COUNT = `${API_URL}/api/userCount`;

const getUsers = (query: string): Promise<UsersQueryResponse | undefined> => {
  return axiosInstance
    .get(`${GET_USERS_URL}?${query}`)
    .then(response => response?.data?.data || {})
    .catch(error => {
      console.error("Error fetching users:", error);
      throw error;
    });
};

const getUserById = (id: any): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const getUserByCount = (): Promise<any | undefined> => {
  return axios
    .get(`${GET_USERS_COUNT}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const updateUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {});
};

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`));
  return axios.all(requests).then(() => {});
};

export {
  getUsers,
  getUserByCount,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
};
