import { RevealOnScroll } from "../RevealOnScroll";

export const About =() =>{
    const frontendSkills = ["Rect","HTML5","TailwindCSS","javascript","Bootstrap"];
    const backendSkills = ["Generative AI","Java","Spring Boot","MySQL","NoSQL","MongoDB","PostgreSQL","Nodejs","Git","Github","AWS","Google Cloud"];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
        text-center">
            About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Hi, I'm Deare. I’m a recent Master’s graduate in Computer Science from Saint Joseph’s University,
                passionate about software development and sharing coding knowledge on YouTube. I’m actively seeking opportunities to grow as a software developer. Here are some of the technologies I work with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech,key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[]0_2px_8px_rgba(59,130,246,0,2) transition">{tech}</span>
                    ))}
                </div>

                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech,key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[]0_2px_8px_rgba(59,130,2246,0,2) transition">{tech}</span>
                    ))}
                </div>

                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. Computer Science</strong> - Saint Joseph's University (2017 - 2021)
                        </li>
                        <li>
                            <strong>M.S. Computer Science</strong> - Saint Joseph's University (2023 - 2025 May)
                        </li>  
                    </ul>
                    <div className="mt-15">
                    <h3 className="text-xl font-bold mb-4"> 💐 Honors & awards</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                        Member of Lambda Chapter of Upsilon Pi Epsilon (UPE) - the International Honor Society for the Computing and Information Disciplines (Feb 2025) 
                        </li> 
                    </ul>

                    </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💻 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">Graduate Teaching Assistant (Aug 2024 - May 2025)</h4>
                        <p>Mentored 50+ students in CS, leading review sessions, grading, and delivering hands-on coding support to boost student understanding.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold">Internship at AI Center.ai (May 2024 - Dec 2024)</h4>
                        <p>Assisted in building backend components and integration Restful APIs.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold">Full time Backend Engineer at Yinhai Software Co., Ltd. (Sep 2021 - Nov 2023)</h4>
                        <p>Developed and maintained scalable backend services using Spring Boot, delivering high-performance APIs and robust business logic.</p>
                    </div>


                    </div>
                    </div>

        </div>
    </div>
    </RevealOnScroll>
    </section>
}