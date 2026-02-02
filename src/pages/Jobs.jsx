export default function Jobs({ jobs, deleteJob }) {
  const statusStyles = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-1">My Job Applications</h2>
      <p className="text-gray-500 mb-8">
        Track all jobs you have applied for across platforms
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{job.company}</h3>
            <p className="text-gray-600">{job.role}</p>

            <p className="text-sm text-gray-500 mt-1">
              💰 Salary: {job.salary}
            </p>
            <p className="text-sm text-gray-500">
              📅 Applied: {job.date}
            </p>
            <p className="text-sm text-gray-500">
              🔗 Source: {job.source}
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${statusStyles[job.status]}`}
            >
              {job.status}
            </span>

            <p className="text-sm text-gray-600 mt-3">
              📝 {job.notes}
            </p>

            <button
              onClick={() => deleteJob(index)}
              className="mt-4 text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
