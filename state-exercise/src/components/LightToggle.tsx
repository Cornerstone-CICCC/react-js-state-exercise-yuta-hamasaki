type LightProps = {
  toggleLights: () => void;
};

const LightToggle = ({toggleLights}:LightProps) => {
  return (
    <button
    onClick={toggleLights}
    >
      Toggle Lights
    </button>
  )
}

export default LightToggle
