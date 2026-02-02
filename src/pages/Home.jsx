import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100">

      {/* Decorative blurred backgrounds */}
      <div className="absolute top-[-120px] left-[-120px] h-80 w-80 rounded-full bg-indigo-300 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block mb-5 px-5 py-1 text-sm font-semibold text-indigo-700 bg-indigo-200 rounded-full">
            💼 Job Application Tracker
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Track Your <span className="text-indigo-600">Job Applications</span>
            <br /> Smartly & Confidently
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            A modern, simple, and powerful dashboard to manage your job
            applications, interviews, and offers — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/add-job"
              className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            >
              ➕ Add New Job
            </Link>

            <Link
              to="/jobs"
              className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
            >
              📋 View Applications
            </Link>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid gap-8 md:grid-cols-3">

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🗂️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Organized Tracking
              </h3>
              <p className="text-gray-600">
                Keep all your job applications neatly organized in one place.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Save Time
              </h3>
              <p className="text-gray-600">
                No spreadsheets, no confusion — update job status in seconds.
              </p>
            </div>


            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Placement Ready
              </h3>
              <p className="text-gray-600">
                Designed specially for students and freshers preparing for jobs.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
