import state from '../state'
const arrow = {
  width: 50
}
const style = {
  zIndex: 1,
  position: 'absolute',
  bottom: '30vh',
  // left: '40vw',
  height: '30px',
  width: '30px',
  background: 'transparent',
  border:0,
  cursor: 'pointer'
}
const CameraButtons = () => {

  const sets = {
    // model_3
    1: {
      cameraPos: [9,2,4],
      target: [4,0,0],
      name: "Capot001_CAR_PAINT_0"
    },
    // model_s
    2: {
      cameraPos: [1,2,5],
      target: [-4,0,0],
      name: "object005_bod_0"
    }
  }

  const handleClick = num => {
    state.cameraPos.set(...sets[num].cameraPos)
    state.target.set(...sets[num].target)
    state.activeMeshName = sets[num].name
    state.shouldUpdate = true
  }
  return (
    <div>
      <button
        onClick={e => handleClick(2)}
        style={{
          left: '40vw',
          ...style
        }}
      >
        <img src={process.env.PUBLIC_URL + '/left.png'} style={arrow}/>
      </button>
      <button
        onClick={e => handleClick(1)}
        style={{
          right: '40vw',
          ...style
        }}
      >
        <img src={process.env.PUBLIC_URL + '/left.png'} style={{...arrow, transform: 'scale(-1, 1)'}}/>
      </button>
    </div>
  )
}

export default CameraButtons