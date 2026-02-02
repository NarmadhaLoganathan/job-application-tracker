export default function Footer() {
  return (
  <footer className="bg-white border-t">

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Apply Platforms */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 mb-3">
            Apply for jobs on popular platforms
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://www.linkedin.com/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              LinkedIn Jobs
            </a>

            <a
              href="https://www.naukri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Naukri
            </a>

            <a
              href="https://www.indeed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Indeed
            </a>

            <a
              href="https://www.glassdoor.co.in/Job/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Glassdoor
            </a>

            <a
              href="https://careers.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Company Career Pages
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500">
         A lightweight job application tracker designed to help users manage applications efficiently.

        </p>
      </div>
    </footer>
  );
}
