import React from "react";


function about() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  text-white p-4  rounded-xl">
        <h1 className="text-4xl font-bold">Khushi singh </h1>
        <p className="text-xl mt-2">Aspiring Full Stack Developer</p>
      </header>

      {/* Professional Image */}
      <section className="flex justify-center mt-6">
        <img
          src="/image.png"
          alt="Profile"
          className="rounded-full border-4 border-white shadow-lg  w-48 h-48"
        />
      </section>

      {/* About */}
      <section className=" bg-white shadow-md rounded-2xl p-6 my-6  mx-4 ">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text mb-4">
About Me</h2>
        <p className="text-gray-700 leading-releaxed">
          Hello! I'm Khushi, a dedicated learner currently diving into full stack development. 
          I enjoy building clean and functional web apps using modern tech stacks like MERN.
        </p>
      </section>

      {/* Education 
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 flex items-centerbg-clip-text mb-4"> Education</h2>  */}
      <section className="py-10 px-4 bg-white text-center">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center gap-2">
  🎓 Education
</h2>
       {/* <p className="text-gray-700 text-base  leading-relaxed mt-2">BCA - Ln Mishra College of Bussiness Management (2023-2026)</p>*/}
       <p className="text-gray-700 text-base leading-relaxed mt-2">
  BCA - Ln Mishra College of Business Management (2023-2026)
</p>
      </section>

      {/* Career section>*/}
      <div className="bg-white rounded-xl shadow-md p-6 my-6 mx-4 hover:shadow-xl transition">
  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
    🚀 Career Goals
  </h2>
  <p className="text-gray-700 mt-2 leading-relaxed">
    My goal is to become a skilled Full Stack Developer and work on innovative web applications that solve real-world problems.
  </p>
</div>

      {/* Experience */}
      <div className="bg-white rounded-xl shadow-md p-6 my-6 mx-4 hover:shadow-xl transition">
  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
    💼 Experience
  </h2>
  <p className="text-gray-700 mt-2 leading-relaxed">
    No formal experience yet, but I have built login/signup APIs, portfolio projects, and attended a MERN Stack training.
  </p>
</div>

      {/* Skills */}
      <div className="bg-white rounded-xl shadow-md p-6 my-6 mx-4 hover:shadow-xl transition">
  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text mb-4">
    🛠️ Skills
  </h2>
  <div className="flex flex-wrap gap-3">
    {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS"].map((skill) => (
      <span key={skill} className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full shadow-md text-sm hover:scale-105 transition-transform">
        {skill}
      </span>
    ))}
  </div>
</div>

      {/* Footer */}
      <footer className="bg-blue-200 text-center py-4 mt-10 shadow-inner">
        &copy; 2025 Khushi Singh. All rights reserved.
      </footer>
    </div>
  );
}

export default about;