import { RevealOnScroll } from "../RevealOnScroll";

export const Projects =() =>{
    return (
        <section id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>

            <div className="max-w-5xl mx-auto px-4"
            >
            <h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
        text-center">
        Featured Projects
            </h2>

            <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                <div 
                className="p-8 rounded-2xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                <p className="text-gray-400 mb-6">
                Personal portfolio showcases modern web development techniques including smooth animations, responsive layouts, and interactive UI components.
                </p> 
                <div className="flex flex-wrap gap-2 mb-4">
                {["React","Vite","TailwindCSS","javascript","HTML5","Bootstrap","EmailJS"].map((tech,key) => (
                    <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">{tech}

                    </span>
                ))}

                </div> 
                <div className="flex justify-between items-center">
                    <a href="#home" 
                    className="text-blue-400 transition-colors my-4 font-semibold hover:underline mt-2"
                    target="_blank"
                    rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
                </div>

                <div 
                className="p-8 rounded-2xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                <h3 className="text-xl font-bold mb-2">SmartBuy E‑commerce Platform</h3>
                <p className="text-gray-400 mb-4">
                SmartBuy is a full-featured online shopping platform built from scratch to deliver a seamless user experience.
                </p> 
                <div className="flex flex-wrap gap-2 mb-4">
                {["Java","Spring Boot","Maven","Spring Security","Spring Data JPA","JWT" ,"MySQL", "Lombok", "RESTful APIs"].map((tech,key) => (
                    <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">{tech}

                    </span>
                ))}

                </div> 
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Deare-stack/SmartBuy_E-commerce_Platform" 
                    className="text-blue-400 transition-colors my-4 font-semibold hover:underline mt-2"
                    target="_blank"
                    rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
                </div>

                <div 
                className="p-8 rounded-2xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                <h3 className="text-xl font-bold mb-2">Java Café – Online Food & Drink Ordering System</h3>
                <p className="text-gray-400 mb-4">
                Java Cafe is an online food and drink ordering website that provides a seamless experience for customers to browse, customize, and place orders at a cafe. 
                </p> 
                <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5","CSS","javascript","Bootstrap"].map((tech,key) => (
                    <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">{tech}

                    </span>
                ))}

                </div> 
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Deare-stack/Java-Cafe---Online-Food-Drink-Ordering-System" 
                    className="text-blue-400 transition-colors my-4 font-semibold hover:underline mt-1"
                    target="_blank"
                    rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
                </div>

                <div 
                className="p-8 rounded-2xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                <h3 className="text-xl font-bold mb-6">Generative AI Models</h3>
                <p className="text-gray-400 mb-4 mt-2">
                The Generative AI Models showcases a collection of AI models I’ve developed and experimented with. 
                </p> 
                <div className="flex flex-wrap gap-2 mb-6 mt-2">
                {["Python","Generative AI","GPT-4","MLP","CNN","VAEs", "MuseNet","tensorflow"].map((tech,key) => (
                    <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">{tech}

                    </span>
                ))}

                </div> 
                <div className="flex justify-between items-center">
                    <a href="https://github.com/Deare-stack/GenAI" 
                    className="text-blue-400 transition-colors my-4 font-semibold hover:underline mt-6"
                    target="_blank"
                    rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
                </div>




            </div>

            </div>
            </RevealOnScroll>
        </section>

    );
};