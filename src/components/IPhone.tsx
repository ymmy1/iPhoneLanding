import { useGLTF } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF('/models/Iphone17.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Mic_mesh.geometry}
        material={materials.Display}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Action.geometry}
        material={materials['Metal Body']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Power_OnOff.geometry}
        material={materials['Metal Body']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Volume_Down.geometry}
        material={materials['Metal Body']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Volume_Up.geometry}
        material={materials['Metal Body']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIDAR.geometry}
        material={materials['Metal Lens Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screw.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker_mesh.geometry}
        material={materials.Display}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USB_C_port.geometry}
        material={materials['Plastic Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Metal Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_1.geometry}
        material={materials['Plastic Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_2.geometry}
        material={materials['Glass Tint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_3.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_4.geometry}
        material={materials['Metal Lens Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lens001.geometry}
        material={materials['Glass Lens']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials['Metal Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_1.geometry}
        material={materials['Plastic Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_2.geometry}
        material={materials['Glass Tint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_3.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_4.geometry}
        material={materials['Metal Lens Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lens002.geometry}
        material={materials['Glass Lens']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials['Metal Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_1.geometry}
        material={materials['Plastic Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_2.geometry}
        material={materials['Glass Tint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_3.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_4.geometry}
        material={materials['Metal Lens Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lens003.geometry}
        material={materials['Glass Lens']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera.geometry}
        material={materials['Plastic Flash']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_1.geometry}
        material={materials.LED}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_2.geometry}
        material={materials['Plastic Flash Tint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['Frosted Glass']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_1.geometry}
        material={materials['Frosted Glass Tint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Metal Body']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials['Plastic Body Antena']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_1.geometry}
        material={materials['Glass Camera Control']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials['Glass Lens']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025_1.geometry}
        material={materials['Plastic Camera Frame']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Glass Tint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_1.geometry}
        material={materials.Display}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_2.geometry}
        material={materials.Glass}
      />
    </group>
  );
}

export default Model;
useGLTF.preload('/models/Iphone17.glb');
