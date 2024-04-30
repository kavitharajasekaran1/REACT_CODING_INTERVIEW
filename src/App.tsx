import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import ProgressBar from './Components/Progressbar';
import Form from './Components/Form';

function App() {
  const [val, setVal] = useState<number>(10)
  const setValuer = (e:React.ChangeEvent<HTMLInputElement>) => setVal(Number(e.target.value))
  return (
    <div className="App">
      <Timer/>
      <ProgressBar width={val} errorMsg = 'Input should be less than 100'/>
      <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={(e)=>setValuer(e)} />
        </form>
        <Form/>
    </div>
  );
}

export default App;
