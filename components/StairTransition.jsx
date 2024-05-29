"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"


const StairTransition = ()=> {
    const pathname = usePathname();

    return( 
        <>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
                    Stair Transition
                </div>
            </div>
        </AnimatePresence>
        </>
    )
}


export default StairTransition