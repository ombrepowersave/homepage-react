import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/404/img_404_1920_1080.png)',
        }}
      />
    </div>
  );
};

export default NotFound;