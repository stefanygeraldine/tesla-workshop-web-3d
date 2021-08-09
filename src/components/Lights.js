import React from 'react';



const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2}/>
      <directionalLight
        intensity={2}
        position={[6,3,0]}
        shadow-mapSize-height={2**10}
        shadow-mapSize-width={2**10}
        shadow-radius={10}
      />
      </>
  );
};

export default Lights;
