import {motion} from 'framer-motion'
const Circle = () => {
    return (
      <motion.div initial={{
        opacity:0,
      }} animate={{
        // x:[-100,-90,0],
        y:[100,90,0],
        scale:[1,2,1.7,2,1],
        opacity:[0.1,0.2,0.4,0.8,0.2,2,3]
      }}
      transition={{
        duration:2.5
      }} className="relative flex justify-center items-center">
        <div className="border absolute border-[#333333] rounded-full h-[150px] w-[150px] mt-20 animate-ping" />
        <div className="border  border-[#333333] rounded-full h-[350px] w-[350px] mt-20  absolute" />
        <div className="border  border-[#333333] rounded-full h-[450px] w-[450px] mt-20  absolute" />
        <div className="border  border-[#F7AB0A] opacity-20 rounded-full h-[600px] w-[600px] mt-20 animate-pulse absolute" />
        {/* <div /> */}
      </motion.div>
    );
}
 
export default Circle;