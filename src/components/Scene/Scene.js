import { Canvas } from "@react-three/fiber";

import Dice from "../Dice/Dice";

const Scene = () => {
  return (
    <Canvas style={{ background: "black" }}>
      <Dice />
    </Canvas>
  );
};

export default Scene;
