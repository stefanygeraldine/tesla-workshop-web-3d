import {useRef, useMemo, Suspense} from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree, useLoader } from '@react-three/fiber'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
extend({OrbitControls})
function App() {

  const Orbit = props =>{
    const {camera, gl} = useThree()
    return(
      <orbitControls args={[camera, gl.domElement]} />
    )
  }

  const Box = props =>{
    const ref = useRef()
    const texture = useLoader(THREE.TextureLoader, './wood.jpg')
    useFrame(state=>{
      ref.current.rotation.y += 0.01;
    })
    return(
      <mesh
        ref={ref}
        {...props}
        castShadow
        receiveShadow
      >
        <sphereBufferGeometry args={[1,100,100]}/>
        <meshPhysicalMaterial
          map={texture}
        />
      </mesh>
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
      ,[])

    return (
      <primitive
        attach='background'
        object={formatted}
      />
    )
  }

  return(
    <div style={{width: '100vw', height:'100vh'}}>
      <Canvas
        shadowMap
        style={{background:'black'}}
        camera={{position:[3,3,3]}}
      >
        <fog attach="fog" args={['white', 1, 10]}/>
        <ambientLight intensity={0.2}/>

        <Buld position={[0,3,0]}/>
        <Orbit/>
        <axesHelper args={[5]}/>
        <Suspense fallback={null}>
          <Box position={[0,1,0]} />
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
