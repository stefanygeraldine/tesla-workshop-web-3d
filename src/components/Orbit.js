import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({OrbitControls})

const Orbit = props =>{
  const {camera, gl} = useThree()
  return(
    <orbitControls args={[camera, gl.domElement]}  attach="orbitControls"/>
  )
}

export default Orbit