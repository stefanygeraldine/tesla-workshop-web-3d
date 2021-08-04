import React from 'react';
import * as THREE from 'three'
const styles ={
  contentColors: {
    position: 'absolute',
    zIndex:1,
    left: 0,
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
  },
  yellow:{
    backgroundColor: 'yellow'
  },
  blue:{
    backgroundColor: 'blue'
  },
  red:{
    backgroundColor: 'red'
  }
}

const handledClick = e =>{
  if ( !window.activeMesh.active ){
    return
  }
  window.activeMesh.material.color = new THREE.Color(e.target.style.backgroundColor)
}

const ColorManage = () => {
  return (
    <div style={styles.contentColors}>
      <button style={styles.yellow} onClick={handledClick}>Amarillo</button>
      <button style={styles.blue} onClick={handledClick}>Azul</button>
      <button style={styles.red} onClick={handledClick}>Rojo</button>
    </div>
  );
};

export default ColorManage;
