import React, { useEffect, useState } from 'react';
import { getForkDetailsApi } from '../services';

interface ForksElementType {
  avatar: string;
  owner: string;
  forkUrl: string;
}

const ForksComponent = ({ id }: { id: string }): JSX.Element => {
  const [forksArr, setForksArr] = useState<ForksElementType[]>();

  useEffect(() => {
    if (!id) return;
    getForkDetailsApi(id).then(response => {
      const avatarArr = response.map(item => {
        return {
          avatar: item.owner.avatar_url,
          owner: item.owner.login,
          forkUrl: item.html_url,
        };
      });
      setForksArr(avatarArr);
    });
  }, []);

  return (
    <div className="fork-container">
      {forksArr && forksArr?.length > 0 && (
        <div className="fork-title">Forked users:</div>
      )}
      {forksArr?.map((item, index) => (
        <div key={index.toString()}>
          <a href={item.forkUrl}>
            <img alt={item.owner} src={item.avatar} className="fork-image" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ForksComponent;
