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

export default Floor