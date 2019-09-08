import axios, { AxiosError, AxiosPromise } from "axios";
import configuration from "../configuration";

const genCli = () =>
  axios.create({
    baseURL: configuration.apiURL,
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": configuration.apiKey
    }
  });

const errorHandler = (err: AxiosError) => {
  if (err.response) {
    throw {
      ...err.response.data,
      status: err.response.status
    };
  }

  throw err;
};

export const getPrefectures = (): AxiosPromise<any> =>
  genCli()
    .get("/v1/prefectures")
    .catch(errorHandler);

export const getComposition = (prefCode: number): AxiosPromise<any> =>
  genCli()
    .get(`/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`)
    .catch(errorHandler);
