import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {Physics} from '@react-three/cannon'
import Box from './components/Box'
import ColorManager from './components/ColorManager'
import Background from './components/Background'
import Floor from './components/Floor'
import Orbit from './components/Orbit'
import Buld from './components/Buld'
import Dragable from './components/Dragable'


function App() {

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
        <Orbit/>
        <axesHelper args={[5]}/>


        <Physics>
          <Dragable>
            <Suspense fallback={null}>
              <Box position={[-4,1,0]} />
            </Suspense>
            <Suspense fallback={null}>
              <Box position={[4,1,0]} />
            </Suspense>
          </Dragable>

          <Buld position={[0,3,0]}/>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0,-0.5,0]} />

        </Physics>

      </Canvas>

    </div>
  )
}

export default App;
