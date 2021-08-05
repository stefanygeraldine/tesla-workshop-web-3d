import { useLoader} from '@react-three/fiber';
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';

// small change
const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )

    return (
        <primitive 
            object={model.scene}
            {...props}
        />
    )
}

export default Model;