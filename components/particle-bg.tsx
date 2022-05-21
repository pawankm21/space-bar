//@ts-nocheck
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleConfig } from "../utils/particles.config";
export default function ParticleBg() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
    <div className="absolute w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
      />
    </div>
  );
}
