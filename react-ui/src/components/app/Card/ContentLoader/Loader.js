import React from 'react';
import ContentLoader from 'react-content-loader';

export const CardContentLoader = (props) => {
  return (
    <div className="app-card">
      <ContentLoader
        speed={2}
        width={160}
        height={245}
        viewBox="0 0 160 245"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="16" y="16" rx="0" ry="0" width="128" height="128" />
        <rect x="16" y="160" rx="0" ry="0" width="128" height="24" />
        <rect x="16" y="190" rx="0" ry="0" width="128" height="18" />
      </ContentLoader>
    </div>
  );
};
