import {
  DragControls
} from 'three/examples/jsm/controls/DragControls';
import { useRef, useEffect, useState } from 'react';
import { useThree, extend } from 'react-three-fiber';
extend ({ DragControls });

const Dragable = props => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [children, setChildren] = useState([])
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    setChildren(groupRef.current.children)
  },[])

  useEffect(() => {
    controlsRef.current.addEventListener(
      'hoveron',
      e => scene.orbitControls.enabled = false
    )
    controlsRef.current.addEventListener(
      'hoveroff',
      e => scene.orbitControls.enabled = true
    )
    controlsRef.current.addEventListener(
      'drag',
      e => {
        console.log('ññ', e)
        e.object?.api?.position.copy(e.object.position)
        e.object?.api?.velocity.set(0,0,0)
      }
    )
  },[children])

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[children,camera, gl.domElement]}
      />
      {props.children}
    </group>
  )
}

export default Dragable;