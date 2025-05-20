import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close on mobile
    }
  };

    const skills = {
      frontend: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "SQL"]
    };

    const experiences = [
      {
        title: "Amazon Clone",
        techStack: "HTML,CSS",
        description: "Built a complete online shopping website with cart.",
        color:"from-yellow-300 to-orange-400"
      },
      {
        title:"Restaurant Website",
        techStack:"React,Tailwind CSS",
          color:"from-pink-300 to-purple-400"
      },
      {
        title: "Authentication API",
        techStack: "Node.js, Express, MongoDB",
        description: "Created secure RESTful API with JWT authentication, signup/login features.",
          color:"from-green-300 to-emerald-400"
      },
      {
        title: " Portfolio Website",
        techStack: "React, Tailwind CSS",
        description: "Designed and developed a personal portfolio website showcasing projects and skills.",
          color:"from-blue -300 to-indigo-400"
      }
    ];
    const goals = [
      {
        icon: <FaRocket className="text-purple-600 text-3xl" ></FaRocket>,
        title: 'MERN Stack Journey',
        description:
          'Currently mastering the MERN stack by building real-world applications and APIs.',
        color: 'from-purple-100 to-purple-200',
      },
      {
        icon: <FaBullseye className="text-blue-600 text-3xl" />,
        title: 'Current Goal',
        description:
          'Looking for opportunities to work as an intern/full-time developer to gain hands-on experience.',
        color: 'from-blue-100 to-blue-200',
      },
      {
       icon: <FaProjectDiagram className="text-green-600 text-3xl" />,
        title: 'Projects Completed',
        description:
          'Developed websites like Amazon Clone, Restaurant Site, Portfolio, and Authentication API.',
        color: 'from-green-100 to-green-200',
      },
      {
      icon: <FaInfinity className="text-pink-600 text-3xl" />,
        title: 'Long-Term Vision',
        description:
          'Aim to become a proficient full-stack developer, solve real-world problems, and grow with the tech industry.',
        color: 'from-pink-100 to-pink-200',
      },
    ];

  return (
    <div className="font-sans">
      {/* Navbar */}
     <nav className="bg-blue-700  text-white px-6 py-4 fixed  flex items-center justify-between fixed w-full top-0 z-50 shadow">
       
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-2xl cursor-pointer">&#9776;</span>
        </div>
        <ul className="md:flex gap-12 hidden -ml-18">
          {["about", "skills", "experience", "career", "education"].map((item) => (
            <li key={item} className="cursor-pointer hover:underline capitalize" onClick={() => scrollToSection(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-indigo-800 text-white flex flex-col items-center p-4">
          {["about", "skills", "experience", "career", "education"].map((item) => (
            <li key={item} className="py-2 cursor-pointer capitalize" onClick={() => scrollToSection(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="pt-20  ">
        {/* About Section 
        <section id="about" className="p-8 bg-bue-50 min-h-screen px-4">
         
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text mb-4">
          About Me</h2>
          <p>I am a MERN Stack Developer passionate about building scalable web apps.</p>
        </section>*/}
         
        <section id="about" className="bg-blue-100 min-h-screen pt-34 px-12  ">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-blue-600">
        <FaUser className="text-5xl" />
  About Me
</h1> 

 
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
    
    {/* Image */}
    <img
      src="../1.jpg"
     alt="Profile"
      className="w-54 h-56 rounded-full object-cover shadow-md"
    />
    
    {/* Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-800 mb-2">Khushi  Singh</h2>
      <h3 className="text-xl text-blue-600 mb-4">MERN Stack Developer</h3>
      <p className="text-gray-700 text-lg max-w-xl">
        Passionate about crafting modern, user-friendly web applications using React, Node.js, and MongoDB. I enjoy solving problems and continuously learning to grow as a full-stack developer.
      </p>
    </div>
    
  </div>
</section>

        {/* Skills Section 
        <section id="skills" className="p-8 bg-pink-100 min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js, Express</li>
            <li>MongoDB</li>
          </ul>
        </section>*/}
              {/* Skills Section */}
    
     {/* <section id="skills" className="p-8 bg-pink-100 min-h-screen pt-25">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text mb-4">
      🛠️ Skills </h2>
     
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-13">
            {["HTML", "CSS", "JavaScript", "SQL","ReactJS", "Tailwind CSS", "Node.js", "MongoDB"].map((skill) => (
              <div key={skill} className="bg-blue-100 text-blue-700 p-4 rounded shadow hover:bg-blue-200">
                {skill}
              </div>
            ))}
          </div>
        </section>*/}
        <section id="skills" className="px-6 bg-slate-100 p-6 rounded-xl shadow-md border border-slate-300  lg:px-16 min-h-screen pt-25">
  <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-transparent bg-clip-text mb-6">
  🛠️  Skills
  </h2>

  {/* Frontend */}
  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Frontend</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
    {skills.frontend.map((skill) => (
      <div key={skill} className="bg-blue-100 text-blue-900 px-4 py-2 rounded shadow hover:bg-blue-200">
        {skill}
      </div>
    ))}
  </div>

  {/* Backend */}
  <h3 className="text-2xl font-semibold text-green-700 mb-2">Backend</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
    {skills.backend.map((skill) => (
      <div key={skill} className="bg-green-100 text-green-900 px-4 py-2 rounded shadow hover:bg-green-200">
        {skill}
      </div>
    ))}
  </div>

  {/* Database */}
  <h3 className="text-2xl font-semibold text-purple-700 mb-2">Database</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {skills.database.map((skill) => (
      <div key={skill} className="bg-purple-100 text-purple-900 px-4 py-2 rounded shadow hover:bg-purple-200">
        {skill}
      </div>
    ))}
  </div>
</section>
    
        

        {/* Experience Section 
        <section id="experience" className="bg-gray-100 py-12 px-6  min-h-screen">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
    💼 Experience
  </h2>
          <p>Worked on multiple frontend and backend projects as a trainee developer.</p>
        </section>
            <section id="experience" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          <span className="inline-block bg-indigo-100 px-4 py-2 rounded-full shadow-sm">
            Experience / Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-xl border-t-4 border-indigo-500 rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-indigo-800 mb-2">{exp.title}</h3>
              <p className="text-sm text-gray-500 italic mb-3">{exp.techStack}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>    <section id="experience" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-14 px-6">*/}
        

        <section id="experience" className="min-h-screen py-12 px-5 bg-gradient-to-r from-slate-300 to-blue-100 pt-25">
      <h2 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-300 to-blue-100 text-center mb-12">
      Experience/Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${exp.color} p-6 rounded-2xl text-white shadow-xl hover:scale-105 hover:scale-105 transform transition duration-300`} >
            <h3 className="text-2xl font-bold text-blue-700 mb-2">💼 {exp.title}</h3>
            <p className="text-sm italic text-gray-500 mb-3">{exp.techStack}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
      


        {/* Career Section 

        <section id="career" className="p-8 bg-green-100 min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Career Objective</h2>
          <p>To work as a full-stack developer in a dynamic tech company.</p>
        </section>
 
 <section id="career" className="p-8 bg-green-100 min-h-screen">
<h1 className="text-3xl font-bold flex items-center justify-center mb-6 text-purple-700  pt-14">
🚀 Career Goals 
</h1>


  </div>

</section>*/}
 
      
    <section id="career" className="p-8 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-50 rounded-xl shadow-lg -500 min-h-screen pt-44">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">🚀 Career Goals</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${goal.color} shadow-lg rounded-xl p-5 flex items-start gap-4 hover:scale-105 transition-transform`}
          >
            {goal.icon}
            <div>
              <h3 className="text-lg font-semibold">{goal.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>




        {/* Education Section 
        <section id="education" className="p-8 bg-yellow-100 min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p>BCA – Ongoing (XYZ University)</p>
         </section>*/}
         <section className="py-10 px-4 bg-gradient-to-br from-yellow-100 via-white to-purple-100 min-h-screen pt-25" id="education">
  <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-10 flex items-center justify-center gap-3">
      <FaGraduationCap className="text-5xl text-purple-600"/>    Education
  </h1>

  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    <div className="bg-white rounded-2xl p-6 border border-purple-300 
                    hover:border-purple-600 hover:shadow-xl hover:scale-105 
                    transition-transform duration-300 cursor-pointer">

      <h2 className="text-xl  font-semibold text-indigo-700 flex items-center gap-2">
       <MdSchool className="text-2xl"/> Bachelor of Computer Applications (BCA)
      </h2>
      <p className="text-gray-700 mt-1">Ln Mishra College of Business Management, Muzaffarpur</p>
      <p className="text-sm text-gray-500 mt-1">2023 - 2026</p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-purple-300 
                    hover:border-purple-600 hover:shadow-xl hover:scale-105 
                    transition-transform duration-300 cursor-pointer">
      <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
       <MdSchool className="text-2xl"/> Intermediate (Science)
      </h2>
      <p className="text-gray-700" mt-1>Shanti Niketan Senior Secondary School, Muzaffarpur</p>
      <p className="text-sm text-gray-500 mt-1">2021 - 2023</p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-purple-300 
                    hover:border-purple-600 hover:shadow-xl hover:scale-105 
                    transition-transform duration-300 cursor-pointer">
      
      <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
      <PiStudentBold className="text-2xl"/>    Matriculation
      </h2>
      <p className="text-gray-700 mt-1">Shanti Niketan Senior Secondary  School, Muzaffarpur</p>
      <p className="text-sm text-gray-500 mt-1">2020 - 2021</p>
    </div>
  </div>
</section>

        
 

  
      </div>
    
      </div>
   
  );
};

export default Portfolio;