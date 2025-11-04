import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense, type Ref, type RefObject, type MutableRefObject, type Dispatch, type SetStateAction } from 'react';

type SizeOption = 'small' | 'large';
type PhoneModel = { title: string; color: string[]; img: string };

type ModelViewProps = {
  index: number;
  gsapType: string;
  size: SizeOption;
  item: PhoneModel;
  groupRef: MutableRefObject<THREE.Group>;
  controlRef: RefObject<any> | MutableRefObject<any>;
  setRotationState: Dispatch<SetStateAction<number>>;
};

function hasAzimuthal(
  ref: RefObject<any> | MutableRefObject<any>
): ref is { current: { getAzimuthalAngle: () => number } } {
  return (
    !!(ref as any)?.current &&
    typeof (ref as any).current.getAzimuthalAngle === 'function'
  );
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
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef as unknown as Ref<any>}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(hasAzimuthal(controlRef)
            ? controlRef.current.getAzimuthalAngle()
            : 0)
        }
      />

      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
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
