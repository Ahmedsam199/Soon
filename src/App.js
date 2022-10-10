
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import ButtonsCircle from './ButtonsCircler';
import Circle from "./Circle";
import Navbar from './Navbar';
function App() {
  const [words]=useTypewriter({
    words:["Hello Im Ahmed","Im A FullStack Web Dev (:"],loop:true,delaySpeed:2000,
            
  })
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
    <Navbar />
      <div className=" h-screen flex flex-col space-y-7 items-center justify-center text-center overflow-hidden">
        <div  className='z-0'>
          <Circle  />
          </div>
          <p > "{words}"</p>
          <div className='z-20'>
          <ButtonsCircle />
          </div>
       
     
        </div>
    </div>
  );
}

export default App;
