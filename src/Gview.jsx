import { useGLTF , Stage , PresentationControls} from "@react-three/drei";
 import { Canvas } from "@react-three/fiber";


export default function Gview(props) {
  const Model = (props) =>{
     const { scene } = useGLTF(props.file);
      return <primitive object={scene} {...props} />

  }
  return (
    <Canvas dpr={[1,2]} shadows camera={{ fov : 45}} style={{height : "90vh"}} >
          
          <PresentationControls speed={2.0} global zoom={.9} polar={[-0.2 , 0.5]}>
          <Stage environment={"apartment"}>
            <Model file={props.file} scale={0.01} />
          </Stage>
          </PresentationControls>
        </Canvas>
  )
}
