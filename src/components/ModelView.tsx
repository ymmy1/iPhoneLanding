import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import {
  Suspense,
  type Dispatch,
  type SetStateAction,
  type RefObject,
} from 'react';

type SizeOption = 'small' | 'large';
type PhoneModel = { title: string; color: string[]; img: string };

type ModelViewProps = {
  index: number;
  gsapType: string;
  size: SizeOption;
  item: PhoneModel;
  groupRef: RefObject<THREE.Group>;
  controlRef: RefObject<OrbitControlsImpl | null>;
  setRotationState: Dispatch<SetStateAction<number>>;
};

function hasAzimuthal(
  ref: RefObject<OrbitControlsImpl | null>
): ref is RefObject<OrbitControlsImpl> {
  return !!ref.current && typeof ref.current.getAzimuthalAngle === 'function';
}

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? '-right-full' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={(instance: OrbitControlsImpl | null) => {
          controlRef.current = instance;
        }}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(
            hasAzimuthal(controlRef)
              ? controlRef.current.getAzimuthalAngle()
              : 0
          )
        }
      />

      <group
        ref={groupRef}
        name={index === 1 ? 'small' : 'large'}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
