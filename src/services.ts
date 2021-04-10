import axios from 'axios';
import { GistResponseSuccessType } from './types';

const baseUrl = 'https://api.github.com/';

const client = axios.create({ baseURL: baseUrl });

const request = <T>(url: string): Promise<T | never> => {
  return client
    .request<T>({
      method: 'get',
      url: url,
    })
    .then(response => {
      if (response.status === 200 && response.data) return response.data;
      return Promise.reject(response);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export const getGistUserApi = (
  username: string
): Promise<GistResponseSuccessType[] | never> => {
  return request<GistResponseSuccessType[]>(
    `/users/${username}/gists?access_token=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`
  );
};

export const getForkDetailsApi = (
  gistId: string
): Promise<GistResponseSuccessType[] | never> => {
  return request<GistResponseSuccessType[]>(
    `/gists/${gistId}/forks?per_page=3&access_token=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`
  );
};
