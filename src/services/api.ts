import apiMock from "../mocks/new-releases";
import { AxiosResponse } from "axios";

export const fetchNewReleases = (offset: number = 0, limit: number = 10) =>
  new Promise<AxiosResponse<any[]>>(resolve => {
    resolve({
      data: apiMock.slice(offset, offset + limit),
      status: 200,
      statusText: "OK",
      headers: {},
      config: {}
    });
  });
