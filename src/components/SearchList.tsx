import React from 'react';
import Store from '../store';
import './index.scss';
import { GistResponseSuccessType } from '../types';
import GistLanguages from './GistLanguages';
import ForksComponent from './ForksComponent';

const SearchList = (): JSX.Element => {
  const { gistResponse } = Store();
  const getFileName = (files: GistResponseSuccessType['files']): string => {
    const fileNames = Object.keys(files);
    return fileNames.length > 0 ? fileNames.toString() : '';
  };
  console.log(gistResponse);
  return (
    <div className="list">
      {gistResponse.map((item, index) => (
        <div key={index.toString()} className="list-element">
          <img
            alt={item.user}
            src={item.owner.avatar_url}
            className="user-image"
          />
          <div className="list-right-items">
            <div className="file-name">{getFileName(item.files)}</div>
            <div className="gist-url">
              <a href={item.url}>{item.url}</a>
            </div>
            {GistLanguages(item.files)}
            <ForksComponent id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
