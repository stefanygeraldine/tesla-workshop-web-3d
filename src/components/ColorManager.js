import React, {useState} from 'react';
import * as THREE from 'three'
import state from '../state'
import { SketchPicker, HuePicker, CirclePicker } from 'react-color';
const styles ={
  contentColors: {
    position: 'absolute',
    zIndex:1,
    left: 0,
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  }
}



const ColorManage = () => {
  const [color, setColor] = useState('#000')

  const handledClick = ({hex}) =>{

    if ( !state.activeMesh ){
      return
    }

    state.activeMesh.material.color = new THREE.Color(hex)
    setColor(hex)

  }

  return (
    <div style={styles.contentColors}>
      <h1>Selecciona un Color</h1>
      <div>
        <HuePicker
          color={ color }
          onChangeComplete={ handledClick }
        />
      </div>
      <div>
        <CirclePicker
          color={ color }
          colors={['#000000', '#ecda1b', '#1b69ec','#db3e00','#909090', '#ffffff']}
          onChangeComplete={ handledClick }
        />
      </div>
    </div>
  );
};

export default ColorManage;
