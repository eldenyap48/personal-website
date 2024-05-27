import { motion, useScroll, useSpring } from "framer-motion";
import Project from "../components/Project.js"

const containerVariant = {
    hidden: { 
        opacity: 0, 
        y: -20
    }, 
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 0.5,
            staggerChildren: 0.3,
        }
    }
};

const projectVariant = {
    hidden: {
        opacity: 0,
        x: 200
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
};

const Projects = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const projects = ["Xcite", "Remote Sensing Data Platform", "Malware Communication", "InvestingTool", "DNS Tunneling", "CalPool"];
    const numPhotos = [3, 2, 4, 4, 2, 3];
    const headers = ["Full-Stack", "Machine Learning", "Network Security", "Full-Stack", "Network Security", "Full-Stack"]
    const descriptions = [
        ["Architected a game-based platform generated with popular tweets gathered using the X API", "Inspired by NYT Connections, the main game \"Who Said That\" randomizes a 4x4 board of iconic posts made by the user's favorite celebrities and challenges them to categorize the posts based on who wrote them. Features a Hint system powered by xAI's LLM Grok that delivers clues.", "Utilizes OAuth2 to authenticate users, allowing them to directly like, retweet and follow celebrities", "Awarded top 5 at the X Developer Challenge 2024"], 
        ["Collaborated with Pacific Gas and Electric Company to develop a Remote Sensory Data Platform", "Worked as part of a team of five to design a machine learning pipeline using AWS solutions and services, aimed at identifying deteriorating electrical structures that may cause wildfires", "Experimented with various pre-trained models including those from Hugging Face and further fine-tuned them with local datasets"],
        ["Developed a discrete malware communication technique with Twitter and Dropbox API inspired by the Russian threat group APT 29", "Employed steganography to obfuscate commands in Twitter images to start remote shell sessions", "Examined packets found within network traffic using Fiddler, Burp Suite and Sysinternals utilities"],
        ["Created a web app for users to track stock data, analyze portfolios and connect with other users", "Draws real-time stock data from yfinance and through web scraping websites with Selenium",  "Builds dynamic, user-customizable candlestick charts and analytical graphs with chartJS, allowing users to analyze stock trends and their portfolios", "Saves all user-specific data onto a remote database powered by PostgreSQL"],
        ["Built client-server DNS tunneling technology in C to hide data in DNS packets and bypass mitigations like DNSSEC", "Constructed DNS over UDP and TCP packets that adhered to guidelines and utilized WireShark to dissect and analyze packets", "Developed a technique to obfuscate data within Resource Records (RR) in DNS packets"],
        ["Constructed a web app enabling students to reduce excess ride-sharing expenses through creating and joining carpool groups", "Achieved 100+ student users, forming over 150+ carpool groups, increasing ride-share efficiency by estimated 73%"]
    ];
    const technologies = [[1,3,4,7], [11,12,13], [5,6], [1,2,9], [5,10], [1,4,8]];
    const externalLinks = [
        "https://github.com/eldenyap48/twitter_games",
        "",
        "https://drive.google.com/drive/folders/11iAtplXtSyaPmHSnLFuMoOjFWOEVCGof?usp=sharing",
        "https://github.com/eldenyap48/InvestingTool",
        "https://drive.google.com/drive/folders/1rW5jpqB749bFRhkcaSr2Uu1nBmXI_3GG?usp=sharing",
        "https://github.com/eldenyap48/Calpool.git",
    ];

    return (
        <motion.article exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            {/* <motion.div className="fixed" style={{ scaleX: scaleX }} ></motion.div> */}
            <motion.div className="mx-10 my-5" initial="hidden" animate="visible" variants={containerVariant}>
                
                <motion.div className="text-5xl font-bold my-10" variants={containerVariant}>
                    My Projects
                </motion.div>

                {projects.map((name, index) => (
                    <motion.div variants={projectVariant}>
                        <Project 
                        name={name} 
                        numPhotos={numPhotos[index]}
                        technologies={technologies[index]}
                        descriptions={descriptions[index]}
                        header={headers[index]}
                        link={externalLinks[index]} />
                    </motion.div>
                ))}

            </motion.div>
        </motion.article>
    );
}

export default Projects;