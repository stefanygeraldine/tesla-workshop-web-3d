import {Suspense} from 'react';
import Dragable from './Dragable'
import BoundingBox from './BoundingBox'
import Model from './Model'


const Cars = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          //visible
          position={[4,2,0]}
          dims={[3,2,6]}
          offset={[0,-0.5,0.8]}
        >
          <Model
            path="/tesla_model_3/scene.gltf"
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          //visible
          position={[-4,0,0]}
          dims={[3,2,7]}
          offset={[0,-0.5,0.8]}
        >
          <Model
            path="/tesla_model_s/scene.gltf"
            scale={new Array(3).fill(0.013)}
          />
        </BoundingBox>
      </Dragable>
      <group rotation={[0,Math.PI,0]}>
        <Model
          path='/mech_drone/scene.gltf'
          scale={new Array(3).fill(0.01)}
        />
      </group>
    </Suspense>
  );
};

export default Cars;
