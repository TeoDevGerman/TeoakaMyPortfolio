// import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/index.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { div } from "framer-motion/client";
// import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
export default function Home() {

    useEffect(
        () => {
            const boxes = document.querySelectorAll(".box");
            console.log("Boxes found:", boxes.length);
            if (boxes.length === 0) {
                console.error("❌ No elements with class 'box' found!");
            } else {
                let angle = 0;
                console.log("running")
                function animateGradient() {
                    angle = (angle + 1) % 360;
                    boxes.forEach((box) => {
                        (box as HTMLElement).style.setProperty("--new_angle", `${angle}deg`);
                    });
                    requestAnimationFrame(animateGradient);
                }
                animateGradient();
            }
        }
    )

    function showSidebar() {
        const sidebar = document.querySelector(".sidebar") as HTMLElement;
        sidebar?.style.setProperty("display", "flex")
    }

    function hideSidebar() {
        const sidebar = document.querySelector(".sidebar") as HTMLElement;
        sidebar?.style.setProperty("display", "none")
    }

    return (
        <div className="gridContainer">
            <nav>
                <ul className="sidebar text-primary">
                    <li onClick={hideSidebar}>
                        <a className="bg-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#08244c"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /><path xmlns="http://www.w3.org/2000/svg" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
                    </li>
                    <li>
                        <Link to="/animatedSVG">SVG Animations</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">teoakaHOME</a>
                    </li>
                    <li className="hideOnMobile">
                        <Link to="/animatedSVG">SVG Animations</Link>
                    </li>
                    <li className="menu-button" onClick={showSidebar}>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#08244c"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a>
                    </li>
                </ul>
            </nav>

            <main>
                {/*all the Info about me in one*/}
                <div className="name">
                    Teoman Wiedenbeck
                </div>
                <div className="ed">
                    B.Sc. Computer Science
                    <p>
                        2020-2025
                    </p>
                </div>
                <div className="box exp">
                    <div className="exp">
                        <div className="text-4xl font-semibold">
                            Work experiences:
                        </div>
                        <p className="text-2xl text-gray-300">
                            Coach @ codary GmbH (Nov. 2024 - Mar. 2025)
                        </p>
                        <p className="text-xl text-gray-300">
                            Teaching kids btween ages 7 - 16, Python and Javascript.
                        </p>
                    </div>
                </div>
                <div className="box proj">
                    <div className="proj">
                        <div className="text-4xl font-semibold">
                            Personal Projects
                        </div>
                        <div className="text-xl text-gray-700 dark:text-gray-300">
                            Eure Berliner Autopflege App (Flutter),
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-300">Portfolio Website (React + Tailwind),</p>
                        <p className="text-xl text-gray-700 dark:text-gray-300">Eigenvalue calculator with Chebychev Polynomials (C++)</p>
                    </div>
                </div>
                <div className="box lang">
                    <div className="lang">
                        <h2 className="text-4xl font-semibold">Programming Languages</h2>
                        <div className="text-2xl grid grid-cols-2 gap-2">
                            {/* <span className="text-center bg-tertiary text-primary rounded">JavaScript</span> */}
                            <span className="text-center bg-tertiary text-primary rounded">Python (2 years)</span>
                            <span className="text-center bg-tertiary text-primary rounded">TypeScript (1 year)</span>
                            <span className="text-center bg-tertiary text-primary rounded">C++ (1 year)</span>
                            <span className="text-center bg-tertiary text-primary rounded">Flutter (6 months)</span>
                        </div>
                    </div>
                </div>
                <div className="box soft">
                    <div className="soft">
                        <h2 className="text-4xl font-semibold">About Me</h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            Passionate about web and App development. <br /> Fluent in English & German. Always open to new opportunities!
                        </p>
                        <div className="flex gap-4 text-2xl">
                            <a href="mailto:teomanArbeit@gmail.com" className="text-gray-300 hover:text-tertiary" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                            <a href="https://www.linkedin.com/in/teoman-wiedenbeck-9713a7339/" className="text-gray-300 hover:text-tertiary" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/TeoDevGerman" className="text-gray-300 hover:text-tertiary" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                        <a
                            href="/CV_Teoman_Wiedenbeck.pdf"
                            className="cv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDownload /> Download CV
                        </a>
                    </div>
                </div>
            </main >
            <footer>
                <ul>
                    <li>
                        hosted by deno
                    </li>
                </ul>
            </footer>
        </div >

    );
}