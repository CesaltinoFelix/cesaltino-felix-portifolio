"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

//components
import Staris from "./Stairs";

const StairTransition = ()=> {
    const pathname = usePathname();

    return( 
        <>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
                    <Staris/>
                </div>
                
                <motion.div
                    className="h-screen w-screen fixed bg-primary pointer-events-none"
                    initial={{opacity: 1}}
                    animate={{
                        opacity: 0,
                        transition: {delay: 1, duration: 0.4, ease: "easeInOut"}
                    }}
                />
            </div>
        </AnimatePresence>
        </>
    )
}


export default StairTransition