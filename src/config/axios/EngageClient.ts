import axiosClient, { AxiosInstance } from "axios";

const engageAxiosApi: AxiosInstance = axiosClient.create({
  baseURL: process.env.REACT_APP_ENGAGE_API,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ENGAGE_TOKEN}`,
    tenantId: process.env.REACT_APP_TENANT_ID,
    Accept: "application/json",
  },
});

engageAxiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/";
    }
  },
);

export default engageAxiosApi;
