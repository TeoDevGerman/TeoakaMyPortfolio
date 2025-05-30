// src/components/XBoxSVG.tsx
function XBoxSVG() {
    return (
        <svg width="500" height="450" viewBox="0 0 114 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="XBox_Buttons_SmilyFace">
                <g id="Circles">
                    <circle id="Y_Circ" cx="57" cy="17" r="7" fill="black" />
                    <circle id="A_Circ" cx="57" cy="77" r="7" fill="black" />
                    <circle id="B_Circ" cx="87" cy="47" r="7" fill="black" />
                    <circle id="X_Circ" cx="27" cy="47" r="7" fill="black" />
                </g>
                <g id="Face">
                    <circle id="Emoji_circle" cx="57" cy="47" r="7" fill="#FFE768" />
                    <g id="Eyes">
                        <circle id="Left_Eye" cx="53.5" cy="44.5" r="0.5" fill="black" />
                        <circle id="Right_Eye" cx="60.5" cy="44.5" r="0.5" fill="black" />
                    </g>
                    <g id="Mouths">
                        <path id="Happy_Mouth" d="M53 49.25C53 52.2039 61 51.6131 61 49.25" stroke="black" stroke-width="0.666667" />
                        <line id="Unhappy_Mouth" x1="53" y1="49.5" x2="61" y2="49.5" stroke="black" />
                    </g>
                </g>
                <g id="Letters">
                    <g id="Letter1" style={{ ["--order" as any]: 1 }}>
                        <path id="Y" d="M53.3068 13.2727H54.517L56.9375 17.3466H57.0398L59.4602 13.2727H60.6705L57.517 18.4034V22H56.4602V18.4034L53.3068 13.2727Z" fill="#FAFF00" />
                    </g>
                    <g id="Letter2" style={{ ["--order" as any]: 2 }}>
                        <path id="X" d="M24.6705 43.4545L26.2386 46.1307L27.8068 43.4545H28.9659L26.8523 46.7273L28.9659 50H27.8068L26.2386 47.4602L24.6705 50H23.5114L25.5909 46.7273L23.5114 43.4545H24.6705Z" fill="#0702FF" />
                    </g>
                    <g id="Letter3" style={{ ["--order" as any]: 3 }}>
                        <path id="B" d="M84.0568 51V42.2727H87.108C87.7159 42.2727 88.2173 42.3778 88.6122 42.5881C89.0071 42.7955 89.3011 43.0753 89.4943 43.4276C89.6875 43.777 89.7841 44.1648 89.7841 44.5909C89.7841 44.9659 89.7173 45.2756 89.5838 45.5199C89.4531 45.7642 89.2798 45.9574 89.0639 46.0994C88.8509 46.2415 88.6193 46.3466 88.3693 46.4148V46.5C88.6364 46.517 88.9048 46.6108 89.1747 46.7812C89.4446 46.9517 89.6705 47.196 89.8523 47.5142C90.0341 47.8324 90.125 48.2216 90.125 48.6818C90.125 49.1193 90.0256 49.5128 89.8267 49.8622C89.6278 50.2116 89.3139 50.4886 88.8849 50.6932C88.456 50.8977 87.8977 51 87.2102 51H84.0568ZM85.1136 50.0625H87.2102C87.9006 50.0625 88.3906 49.929 88.6804 49.6619C88.973 49.392 89.1193 49.0653 89.1193 48.6818C89.1193 48.3864 89.044 48.1136 88.8935 47.8636C88.7429 47.6108 88.5284 47.4091 88.25 47.2585C87.9716 47.1051 87.642 47.0284 87.2614 47.0284H85.1136V50.0625ZM85.1136 46.108H87.0739C87.392 46.108 87.679 46.0455 87.9347 45.9205C88.1932 45.7955 88.3977 45.6193 88.5483 45.392C88.7017 45.1648 88.7784 44.8977 88.7784 44.5909C88.7784 44.2074 88.6449 43.8821 88.3778 43.6151C88.1108 43.3452 87.6875 43.2102 87.108 43.2102H85.1136V46.108Z" fill="#FA0101" />
                    </g>
                    <g id="Letter4" style={{ ["--order" as any]: 4 }}>
                        <path id="A" d="M54.4148 80H53.3068L56.5114 71.2727H57.6023L60.8068 80H59.6989L57.0909 72.6534H57.0227L54.4148 80ZM54.8239 76.5909H59.2898V77.5284H54.8239V76.5909Z" fill="#00982B" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

// src/components/CarSVG.tsx
function CarSVG() {
    return (
        <svg width="500" height="560" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Car1">
                <line id="Car_bottom" x1="19" y1="62.5" x2="83" y2="62.5" stroke="white" />
                <g id="SpeedStripes" stroke="lightblue">
                    <line id="Speed_stripes1" x1="30" y1="50" x2="55" y2="50" />
                    <line id="Speed_stripes2" x1="25" y1="54" x2="50" y2="54" />
                    <line id="Speed_stripes3" x1="35" y1="58" x2="60" y2="58" />
                </g>
                <g id="SpeedStripes2" stroke="lightblue">
                    <line id="Speed_stripes1" x1="30" y1="40" x2="55" y2="40" />
                    <line id="Speed_stripes2" x1="25" y1="44" x2="50" y2="44" />
                    <line id="Speed_stripes3" x1="35" y1="48" x2="60" y2="48" />
                </g>
                <g id="Tires" stroke="#00F0FF">
                    <g id="Tire_right">
                        <g id="Tire_outside" filter="url(#filter0_b_1_2)">
                            <circle cx="71" cy="62" r="4.5" stroke="#00F0FF" />
                        </g>
                    </g>
                    <g id="Tire_left">
                        <g id="Tire_outside_2" filter="url(#filter1_b_1_2)">
                            <circle cx="27" cy="62" r="4.5" stroke="#00F0FF" />
                        </g>
                    </g>
                </g>
                <line id="Road" x1="15" y1="66.5" x2="85" y2="66.5" stroke="black" />
                <line id="Road3" x1="15" y1="66.5" x2="85" y2="66.5" stroke="blue" />
                <line id="Road2" x1="30" y1="66.5" x2="50" y2="66.5" stroke="#00F0FF" />
                <g id="Car" stroke="#00F0FF">
                    <path id="Car_Outline" d="M82.5 62.5C82.5 58.9 81.5 58 81 58C81 53.6 71.3334 52.1667 66.5 52L54 45C49.6 43.4 34.1667 45 27 46C23 46 21 53.3333 20.5 57L19 58L20 62.5" stroke="#00F0FF" />
                    <path id="Car_left_window" d="M42 45L43 51.5L66.5 52" stroke="black" />
                    <path id="Car_right_window" d="M43 51.5L23 50" stroke="black" />
                    <path id="Car_door" d="M43 51.5C39.8 51.1 41.6666 58.6667 43 62.5" stroke="black" />
                    <path id="Car_handle" d="M43.5 53.5H47" stroke="#00F0FF" />
                    <path id="Car_Headlight" d="M80.5 56.5C76.9 58.1 74.6667 54.8333 74 53" stroke="#00F0FF" />
                </g>
            </g>
            <defs>
                <filter id="filter0_b_1_2" x="62" y="53" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2" result="shape" />
                </filter>
                <filter id="filter1_b_1_2" x="18" y="53" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

// src/pages/AnimatedSVG.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "../css/animSVG.css";
import "../css/car1.css";
import "../css/xbox.css";
import { Link } from "react-router-dom";

export default function AnimatedSVG() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <div className="min-h-screen bg-primary p-6 flex flex-col items-center justify-center">
            <div className="text-gray-100 text-center max-w-2xl flex flex-col items-center space-y-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to SVG Animations
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    I'm a passionate developer creating modern and responsive web applications.
                </motion.p>

                <motion.p
                    className="text-lg md:text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    All SVGs are made by me using Figma and then animated with CSS.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Link to="/">
                        <a
                            href="/"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-300 mr-4"
                        >
                            🏠 Home
                        </a>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="svg-animation-container mt-12 flex flex-col gap-12 items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <XBoxSVG />
                <CarSVG />
            </motion.div>
        </div>
    );
}
