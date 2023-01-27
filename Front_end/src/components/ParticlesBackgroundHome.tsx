import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import ParticleConfig from "./config/ParticleConfig"

export default function App() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
  		<div>
       <Particles  init={particlesInit} options={ParticleConfig.particle1 } />
  		</div>
  );
}