import React, { useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className = '', 
  width = '100%', 
  height = '100%',
  borderRadius = '0px',
  style = {},
  imgStyle = {}
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    // Opcionalmente pode-se adicionar lógica para lidar com erros de carregamento
  };

  return (
    <div className={`image-skeleton-container ${className}`} style={{ position: 'relative', width, height, ...style }}>
      {isLoading && (
        <SkeletonLoader 
          width="100%" 
          height="100%" 
          borderRadius={borderRadius} 
        />
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          display: isLoading ? 'none' : 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius,
          ...imgStyle
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton; 