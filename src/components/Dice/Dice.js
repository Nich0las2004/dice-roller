import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

import dot1 from "../../assets/1-dot.jpg"

const Dice = () => {
  const diceRef = useRef();

  const texture = new TextureLoader().load(dot1);

  return (
    <mesh ref={diceRef}>
      <boxGeometry />
      <meshBasicMaterial map={texture} />
      <OrbitControls
        minDistance={2}
        maxDistance={6}
        enableZoom={true}
        dampingFactor={0.1}
      />
    </mesh>
  );
};

export default Dice;
