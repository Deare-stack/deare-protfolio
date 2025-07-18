import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4 space-y-8 md:space-y-0 md:space-x-16">
                    <div className="w-110 h-120 rounded-full overflow-hidden shadow-lg border-4 border-purple-300">
                        <img
                            src={import.meta.env.BASE_URL + 'profile.png'}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-center ">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 
                        bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent 
                        leading-tight">
                            Hi, I'm Deare
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg">
                            I'm recent Master’s graduate in Computer Science with skills in Generative AI, Java, Spring Boot, MySQL, PostgreSQL and React. Passionate about software development and sharing knowledge through my YouTube coding channel. Actively seeking software Engineer opportunities.
                        </p>
                        <div className="flex justify-center space-x-4 mb-8 mt-8">
                            <a href="#projects" className="bg-blue-500 text-white border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 "> 
                                View Projects
                            </a>
                            <a href="#contact" className="bg-blue-500 text-white border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 "> 
                                Contact Me
                            </a>
                        </div>
                          {/* Social Links */}
                        <div className="flex justify-center space-x-8 mb-10 mt-10">
                        
                            <a href="https://github.com/Deare-stack/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white text-2xl">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/deare-abudushalamu/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white text-2xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.youtube.com/@DiyaraCode" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white text-2xl">
                                <FaYoutube />
                            </a>
                        
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
