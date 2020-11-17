import React from 'react';
import { useParams } from 'react-router-dom';
import { AppCard } from '../../components/app/Card/Card';
import { AppList } from '../../components/app/List/List';

import './Root.scss';

export const ScreensAppRoot = () => {
  const { category } = useParams();

  return (
    <div className="screens-app-root">
      <AppList
        title={
          category
            ? category[0].toUpperCase() + category.substr(1)
            : 'Todas las apps'
        }
      >
        {[
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ].map(() => (
          <AppCard
            name="SoundCloud - Música, audio, mixes y podcast"
            img="https://play-lh.googleusercontent.com/lvYCdrPNFU0Ar_lXln3JShoE-NaYF_V-DNlp4eLRZhUVkj00wAseSIm-60OoCKznpw=s180-rw"
            developer="SoundCloud"
            price="$16"
            id="asdasd"
          />
        ))}
      </AppList>
    </div>
  );
};
