import React from 'react';
import * as THREE from 'three'
import state from '../state'
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

  if ( !state.activeMesh ){
    return
  }

  state.activeMesh.material.color = new THREE.Color(e.target.value)

}

const ColorManage = () => {
  return (
    <div style={styles.contentColors}>
      <input type="color" onChange={handledClick}/>
    </div>
  );
};

export default ColorManage;
