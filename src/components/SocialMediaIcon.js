import { useState } from "react";
import { motion } from "framer-motion";

const SocialMediaIcon = ({hoverIcon, link, webpage}) => {
    
    const [isHovering, setIsHovering] = useState(false);

    const icon = require(`../assets/icons/${webpage}-icon.png`)

    return (
        <motion.a 
            href={link} 
            className="border border-gray-300 overflow-hidden rounded-md hover:bg-teal/30"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setTimeout(() => setIsHovering(false), 800)}
        >
            <motion.img animate={ isHovering ? hoverIcon : {} } src={ icon } className="w-12 h-12 p-2 rounded-md"/>
        </motion.a>
    );
}

export default SocialMediaIcon;