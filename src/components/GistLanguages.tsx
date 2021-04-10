import React from 'react';
import { GistResponseSuccessType } from '../types';
import './index.scss';

const GistLanguages = (
  files: GistResponseSuccessType['files']
): JSX.Element => {
  return (
    <div className="language-container">
      {Object.values(files).map((item, index) => (
        <div key={index.toString()} className="languages">
          {item.language}
        </div>
      ))}
    </div>
  );
};

export default GistLanguages;
