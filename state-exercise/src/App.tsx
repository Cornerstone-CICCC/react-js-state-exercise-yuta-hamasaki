import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
const [isOn, setIsOn] = useState(true)
const [numbers, setNumbers] = useState<number[]>([]);
const [count, setCount] = useState(0)

const toggleLights = () => setIsOn((prev)=>!prev)
const generateNumbers = () => {
  const numbers = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 50) + 1
  );
  setNumbers(numbers);
};
const increase = () => {
  setCount((prev)=> prev +1)
}


  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle 
      toggleLights={toggleLights}
      />
      <div
      style={{
        backgroundColor: isOn ? 'white' : "black"
      }}
      >Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers 
      generateNumbers={generateNumbers}
      />
      <div className="output">
      {numbers.length > 0 && `Lotto Numbers: ${numbers.join(', ')}`}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter
      increase={increase}
      />
      <div className="output">
        {count}
      </div>
    </div>
  );
};

export default App;