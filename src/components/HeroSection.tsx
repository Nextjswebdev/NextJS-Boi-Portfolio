'use client'

import Image from "next/image";
import SocialIcons from '../components/SocialIcons'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 font-inter bg-gray-50">
      {/* Header Section */}
      <header className="w-full max-w-5xl mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center space-x-4">
          <span className="text-black">Mohd Anas Saif</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">Front-End Developer | Next.js Enthusiast</p>

        {/* Imported social icons */}
        <SocialIcons/>
        
      </header>

      {/* About Me Section */}
      <section className="w-full max-w-5xl mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-black">About Me</h2>
        <p className="text-base md:text-lg mb-4 text-gray-800">
  Hi there! I'm Anas Saif, a front-end developer passionate about crafting stunning web applications. My background in chemistry didn't stop me from mastering HTML, CSS, JavaScript, and Next.js.
</p>
<p className="text-base md:text-lg mb-4 text-gray-800">
  I focus on delivering top-notch code and pushing boundaries in web development. Currently, I'm diving deep into projects with Next.js, aiming for innovation with every line of code.
</p>
<p className="text-base md:text-lg mb-4 text-gray-800">
  When I'm not coding, you'll find me actively contributing to various projects and staying ahead of the latest trends in tech. Thanks for dropping by to explore my portfolio!
</p>

       
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-5xl mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-black">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"].map(skill => (
            <div key={skill} className="p-4 border rounded-lg shadow-md bg-gray-50">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-5xl mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-black">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
  {
    "title": "Circl8 Site",
    "description": "Project about a company that collects plastic and makes it reusable.",
    "link": "https://github.com/mdkhan2024/circl8"
  },
  {
    "title": "CodingClassroom Site",
    "description": "First website built by the user, offering coding tutorials, tools, and PDFs.",
    "link": "https://github.com/mdkhan2024/Coding-Classroom"
  },
  {
    "title": "NoCodeAPI Clone",
    "description": "Recreation of NoCodeAPI, a platform for building applications without code.",
    "link": "https://github.com/yourname/project-three"
  }
]
.map(project => (
            <div key={project.title} className="p-4 border rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm md:text-base mb-2 text-gray-700">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full max-w-5xl mt-10 text-center">
        <p className="text-sm md:text-base text-gray-700">&copy; {new Date().getFullYear()} Mohd Anas Saif. All rights reserved.</p>
      </footer>
    </main>
  );
}