const Buld = props =>{
  return(
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereBufferGeometry arg={[0.2]}/>
      <meshPhongMaterial emissive="yellow"/>
    </mesh>
  )
}

export default Buld