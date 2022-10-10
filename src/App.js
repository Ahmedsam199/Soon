import './App.css';
import {useTypewriter} from 'react-simple-typewriter'
import Circle from "./Circle";
function App() {
  const [words]=useTypewriter({
    words:["Hello This is Test","It Worked 2"],loop:true,delaySpeed:2000,
            
  })
  return (
    <>
      <div>
        <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
          <Circle />
          <p className="animate-spin "> "{words}"</p>
        </div>
      </div>
        <p  className="animate-pulse"> Hello World</p>
    </>
  );
}

export default App;
