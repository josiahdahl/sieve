import apiMock from '../mocks/new-releases';
import { AxiosResponse } from 'axios';

export const fetchNewReleases = (
  page: number,
  limit: number = 10
): Promise<AxiosResponse<any[]>> =>
  new Promise(resolve => {
    const startPage = page > 0 ? page : 1;
    const start = (startPage - 1) * limit;
    const end = startPage * limit;
    resolve({
      data: apiMock.slice(start, end),
      status: 200,
      statusText: "OK",
      headers: {},
      config: {}
    });
  });
