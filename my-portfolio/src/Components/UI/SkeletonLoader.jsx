import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = ({ width, height, borderRadius = '0px', className = '' }) => {
  const skeletonStyle = {
    width: width || '100%',
    height: height || '200px',
    borderRadius: borderRadius,
  };

  return (
    <div 
      className={`skeleton-loader ${className}`}
      style={skeletonStyle}
    />
  );
};

export default SkeletonLoader; 