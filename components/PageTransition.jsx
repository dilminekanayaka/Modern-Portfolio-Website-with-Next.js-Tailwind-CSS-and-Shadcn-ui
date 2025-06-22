"use client"

import { AnimatePresence } from "framer-motion";

const PageTransition = ({childern}) => {
    return 
        <AnimatePresence> 
            {childern}
        
        </AnimatePresence>;
    
};

export default PageTransition;