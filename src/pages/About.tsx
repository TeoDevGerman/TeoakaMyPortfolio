import { motion } from "framer-motion";
import "../css/index.css"
export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
            {/* Hero Section */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Welcome to My Portfolio
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-center max-w-2xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                I'm a passionate developer creating modern and responsive web applications.
            </motion.p>

            {/* Call to Action Button */}
            <motion.a
                href="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                View My Projects
            </motion.a>
        </div>
    );
}