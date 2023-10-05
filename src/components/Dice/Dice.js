import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Dice = () => {
  const diceRef = useRef();

  useFrame(() => {
    if (diceRef.current) {
      diceRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={diceRef}>
      <boxGeometry />
    </mesh>
  );
};

export default Dice;
