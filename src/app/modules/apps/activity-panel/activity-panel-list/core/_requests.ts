import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../../../_metronic/helpers";
import { ActivityList, UsersQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_LARAVEL_API_URL;
const GET_ACTIVITY_LIST_URL = `${API_URL}/api/activity-list`;

const getActivityList = (query: string): Promise<UsersQueryResponse | undefined> => {
    return axios
        // .get(`${GET_USERS_URL}?${query}`)
        .get(`${GET_ACTIVITY_LIST_URL}?${query}`)
        .then((d: AxiosResponse<UsersQueryResponse>) => d?.data?.data || {});
};

export {
    getActivityList
}