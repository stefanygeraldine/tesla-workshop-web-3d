import { useRef } from 'react'
import {  useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useBox } from '@react-three/cannon'


const Box = props =>{
  const [ref, api] = useBox(()=>({mass:1,...props}))
  const texture = useLoader(THREE.TextureLoader,
    process.env.PUBLIC_URL +'./wood.jpg')
  useFrame(state=>{
    ref.current.rotation.y += 0.01;
  })

  const scaleDown = (object, scale) =>{
    object.scale.x = scale
    object.scale.y = scale
    object.scale.z = scale
  }

  const handledPointer = e =>{
    console.log(e)
    e.object.active = true
    if(window.activeMesh){
      scaleDown(window.activeMesh, 1)
      window.activeMesh.active = false
    }
    window.activeMesh =  e.object
  }

  const handledPointerEnter = e => {
    scaleDown(e.object, 1.5)
  }

  const handledPointerLeave = e => {
    if(!e.object.active){
      scaleDown(e.object, 1)
    }
  }



  return(

      <mesh
        ref={ref}
        api={api}
        {...props}
        castShadow
        receiveShadow
        onPointerDown={handledPointer}
        onPointerEnter={handledPointerEnter}
        onPointerLeave={handledPointerLeave}
      >
        <sphereBufferGeometry args={[1,100,100]}/>
        <meshPhysicalMaterial
          map={texture}
        />
      </mesh>

  )
}

export default Box
