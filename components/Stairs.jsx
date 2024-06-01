import { animate, motion } from "framer-motion"


//variants
const StairAnimation = {
    initial:{
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

//calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () =>{
    return <>
        {/* Render 6 motion divs, each representinga a step of the stair.
            Each will have de same animation defined by the StairsAnimation object.
            The delay for each div is calculated dinamically based on it's reverserd index,
            creating a staggered effect with decreasing delay for each subsequent step.
        */}
        {[...Array(6)].map((_, index)=>{
            return (
            <motion.div 
            key={index}
            variants={StairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                delay: reverseIndex(index) * 0.1,
                ease: "easeInOut",
                duration: 0.4
            }}
            className="h-full w-full bg-white relative"
            />
            );
        })}
    </>
}

export default Stairs