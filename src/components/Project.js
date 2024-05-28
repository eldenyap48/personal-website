import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';

const galleryVariants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    }
};

const galleryTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
};

const Project = ({ name, numPhotos, technologies, descriptions, header, link }) => {

    var pictures = [];
    for (let i=1; i<numPhotos+1; i++) {
        var picture = require(`../assets/projects/${name}/${i}.png`);
        pictures.push(picture);
    }

    var techIcons = [];
    for (const index in technologies) {
        var techIcon = require(`../assets/technologies/${technologies[index]}.png`);
        techIcons.push(techIcon);
    }

    const [[page, direction], setPageDirection] = useState([0, 0]);

    const paginate = newDirection => {

        let newPage = page + newDirection;

        if (newPage >= numPhotos) {
            newPage -= numPhotos;
        } else if (newPage < 0) {
            newPage += numPhotos;
        }

        setPageDirection([newPage, newDirection]);
    }

    return (
        <motion.div className="relative overflow-hidden" whileHover={{ scale: 1.05 }}>
            { link != "" ? <motion.a href={ link } className='absolute font-bold -right-14 top-8 text-sm p-1 bg-teal text-white text-center w-48 transform rotate-45 origin-center'>External Link</motion.a> : null}

            <motion.div className="flex flex-row gap-5 p-3 my-5" initial="hidden" animate="visible">

                <motion.div className="basis-2/5 h-72 relative flex justify-center items-center border shadow rounded-md overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img className="absolute w-full h-full object-contain" key={page} src={pictures[page]} custom={direction} variants={galleryVariants} initial="enter" animate="center" exit="exit" transition={galleryTransition}/>
                    </AnimatePresence>
                    <div className="absolute text-5xl z-10 right-2 cursor-pointer" onClick={() => paginate(1)}>
                        {"‣"}
                    </div>
                    <div className="absolute text-5xl rotate-180 z-10 left-2 cursor-pointer" onClick={() => paginate(-1)}>
                        {"‣"}
                    </div>
                </motion.div>

                <motion.div className="basis-3/5 ml-10 flex flex-col">
                    <motion.div className="flex gap-8 items-end">
                        <motion.div className="text-3xl font-bold">{ name }</motion.div>
                        <motion.div className="text-2xl font-medium text-black/70">{ header }</motion.div>
                    </motion.div>

                    <motion.div className='mt-4 ml-2'>
                        {
                            descriptions.map((desc, i) => (
                                <motion.div className='mt-2 text-lg'>{ desc }</motion.div> 
                            ))
                        }
                    </motion.div>

                    <motion.div className='flex flex-row gap-5 mt-10'>
                        {
                            techIcons.map((icon, index) => (
                                <motion.img src={icon} key={index} alt={`name-technology-${index}`} className="object-contain h-8"/>
                            ))
                        }
                    </motion.div>
                </motion.div>

            </motion.div>

            <div className="my-10 bg-black/10 h-0.5 px-2 rounded-full"></div>
        
        </motion.div>
        
    );
};

export default Project;