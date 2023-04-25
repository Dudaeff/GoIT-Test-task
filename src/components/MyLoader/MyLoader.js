import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={2000}
    height={460}
    viewBox="0 0 900 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-6" y="32" rx="3" ry="3" width="177" height="258" />
    <rect x="206" y="30" rx="3" ry="3" width="171" height="261" />
    <rect x="403" y="29" rx="3" ry="3" width="170" height="262" />
    <rect x="247" y="325" rx="0" ry="0" width="90" height="23" />
  </ContentLoader>
);

export default MyLoader;
