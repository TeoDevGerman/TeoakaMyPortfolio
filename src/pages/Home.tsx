// import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/index.css"
// import { div } from "framer-motion/client";
// import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
export default function Home() {
    console.log("🚀 Script is running!");

    let angle = 0;
    const boxes = document.querySelectorAll(".box");

    console.log("Boxes found:", boxes.length);

    if (boxes.length === 0) {
        console.error("❌ No elements with class 'box' found!");
    } else {
        function animateGradient() {
            angle = (angle + 1) % 360;
            console.log("Animating to:", angle);
            boxes.forEach(box => {
                (box as HTMLElement).style.setProperty("--new_angle", `${angle}deg`);
            });
            requestAnimationFrame(animateGradient);
        }

        animateGradient();
    }

    return (
        <div className="gridContainer">
            <nav>
                Navbar
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
                <div className="box">
                    <div className="exp">
                        <div className="text-4xl font-semibold">
                            Work experiences:
                        </div>
                        <p className="text-2xl text-gray-300 mt-2">
                            Coach @ codary GmbH (Nov. 2024 - Mar. 2025)
                        </p>
                        <p className="text-xl text-gray-300">
                            Teaching kids btween ages 7 - 16, Python and Javascript.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="proj">
                        <div className="text-4xl font-semibold">
                            Personal Projects
                        </div>
                        <div className="text-xl text-gray-700 dark:text-gray-300 mt-2">
                            Eure Berliner Autopflege App (Flutter),
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">Portfolio Website (React + Tailwind),</p>
                        <p className="text-xl text-gray-700 dark:text-gray-300">Eigenvalue calculator with Chebychev Polynomials (C++)</p>
                    </div>
                </div>
                <div className="box">
                    <div className="lang">
                        <h2 className="text-4xl font-semibold">Programming Languages</h2>
                        <div className="text-2xl mt-2 grid grid-cols-2 gap-2">
                            {/* <span className="text-center bg-tertiary text-primary rounded">JavaScript</span> */}
                            <span className="text-center bg-tertiary text-primary rounded">Python (2 years)</span>
                            <span className="text-center bg-tertiary text-primary rounded">TypeScript (1 year)</span>
                            <span className="text-center bg-tertiary text-primary rounded">C++ (1 year)</span>
                            <span className="text-center bg-tertiary text-primary rounded">Flutter (6 months)</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="soft">
                        <h2 className="text-4xl font-semibold">About Me</h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
                            Passionate about web and App development. Fluent in English & German. Always open to new opportunities!
                        </p>
                        <div className="flex gap-4 mt-4 text-2xl">
                            <a href="mailto:teomanArbeit@gmail.com" className="text-gray-300 hover:text-tertiary"><FaEnvelope /></a>
                            <a href="https://linkedin.com/in/johndoe" className="text-gray-300 hover:text-tertiary"><FaLinkedin /></a>
                            <a href="https://github.com/TeoDevGerman" className="text-gray-300 hover:text-tertiary"><FaGithub /></a>
                        </div>
                        <a
                            href="/resume.pdf"
                            className="cv"
                        >
                            <FaDownload className="inline-block mr-2" /> Download CV
                        </a>
                    </div>
                </div>
            </main >
            <footer>
                Footer
            </footer>
        </div >

    );
}