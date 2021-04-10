import { useState } from 'react';
import { createStore } from 'reusable';
import { getGistUserApi } from './services';
import { GistResponseSuccessType } from './types';

const Store = createStore(() => {
  const [gistResponse, setGistResponse] = useState<GistResponseSuccessType[]>(
    []
  );

  const callGetGistUserApi = (query: string): void => {
    getGistUserApi(query).then(response => {
      setGistResponse(response);
    });
  };

  return {
    callGetGistUserApi,
    gistResponse,
  };
});

export default Store;
