import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Dice = () => {
  const diceRef = useRef();

  return (
    <mesh ref={diceRef}>
      <boxGeometry />
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
