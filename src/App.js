import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

import {Physics} from '@react-three/cannon'
import Box from './components/Box'
import ColorManager from './components/ColorManager'
import Background from './components/Background'
import Floor from './components/Floor'
import Orbit from './components/Orbit'
import Buld from './components/Buld'
import Cars from './components/Cars'
import CameraControls from './components/CameraControls'
import CameraButtons from './components/CameraButtons'
import Lights from './components/Lights'
import Effects from './components/Effects'

function App() {

  return(
    <div style={{width: '100vw', height:'100vh'}}>
      <ColorManager/>
      <CameraButtons/>
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}
        shadows
        style={{background:'black'}}
        camera={{position:[7,7,7]}}
      >
        <CameraControls/>

        <fog attach="fog" args={['white', 1, 50]}/>
        <Lights/>
        <Orbit/>
        {/*<axesHelper args={[5]}/>*/}



        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Buld position={[-6,3,0]}/>
        <Buld position={[0,3,0]}/>
        <Buld position={[6,3,0]}/>

        <Physics>
          <Cars/>
          {/*<Suspense fallback={null}>
            <Box position={[0,0,0]} />
          </Suspense>*/}
          <Floor position={[0,-0.5,0]} />
        </Physics>
        <Effects/>
      </Canvas>

    </div>
  )
}

export default App;
