export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* PROFILE CARD */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row gap-8">
        
        {/* LEFT: IMAGE */}
        <div className="flex-shrink-0 text-center">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500 mx-auto"
          />
          <h2 className="text-xl font-bold mt-4">Narmadha L</h2>
          <p className="text-gray-500">Frontend Developer</p>
          <p className="text-sm text-gray-400">Tamil Nadu, India</p>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">
            Career Summary
          </h3>
          <p className="text-gray-600 mb-4">
            Computer Science graduate and aspiring Frontend Developer with
            hands-on experience in React, JavaScript, and UI development.
            Actively tracking job applications and interview progress across
            multiple companies.
          </p>

          {/* SKILLS */}
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Git",
              "Java (Basics)",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CONTACT */}
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">
            Contact
          </h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>📧 narmadha.dev@gmail.com</p>
            <p>📱 +91 9XXXXXXXXX</p>
            <p>🔗 linkedin.com/in/narmadha-l</p>
            <p>💻 github.com/narmadha-dev</p>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-3xl font-bold text-indigo-600">10</p>
          <p className="text-gray-500 text-sm mt-1">Applications</p>
        </div>
       
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-3xl font-bold text-yellow-500">1</p>
          <p className="text-gray-500 text-sm mt-1">Interviews</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-3xl font-bold text-green-600">1</p>
          <p className="text-gray-500 text-sm mt-1">Offers</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-3xl font-bold text-red-500">5</p>
          <p className="text-gray-500 text-sm mt-1">Rejected</p>
        </div>
      </div>
    </div>
  );
}
