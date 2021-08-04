import { useMemo, Suspense} from 'react'
import * as THREE from 'three'
import { Canvas, extend, useThree, useLoader } from '@react-three/fiber'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Box from './components/Box'
import ColorManager from './components/ColorManager'
extend({OrbitControls})
function App() {

  const Orbit = props =>{
    const {camera, gl} = useThree()
    return(
      <orbitControls args={[camera, gl.domElement]} />
    )
  }


  const Floor = props =>{
    return(
      <mesh
        {...props}
        receiveShadow
      >
        <boxBufferGeometry args={[10,1,10]}/>
        <meshPhysicalMaterial/>
      </mesh>
    )
  }

  const Buld = props =>{
    return(
      <mesh {...props}>
        <pointLight castShadow/>
        <sphereBufferGeometry arg={[0.2]}/>
        <meshPhongMaterial emissive="yellow"/>
      </mesh>
    )
  }

  const Background = props => {
    const texture = useLoader(
      THREE.TextureLoader,
      process.env.PUBLIC_URL + '/autoshop.jpg'
    );

    const { gl } = useThree();
    const formatted = useMemo(() =>
        new THREE.WebGLCubeRenderTarget(
          texture.image.height
        ).fromEquirectangularTexture(gl, texture)
      ,[gl, texture])

    return (
      <primitive
        attach='background'
        object={formatted.texture}
      />
    )
  }

  return(
    <div style={{width: '100vw', height:'100vh'}}>
      <ColorManager/>
      <Canvas
        shadows
        style={{background:'black'}}
        camera={{position:[7,7,7]}}
      >
        <fog attach="fog" args={['white', 1, 50]}/>
        <ambientLight intensity={0.2}/>

        <Buld position={[0,3,0]}/>
        <Orbit/>
        <axesHelper args={[5]}/>
        <Suspense fallback={null}>
          <Box position={[-4,1,0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[4,1,0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0,-0.5,0]} />

      </Canvas>,
    </div>
  )
}

export default App;
