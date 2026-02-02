import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddJob({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("Applied");
  const [source, setSource] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    addJob({
      company,
      role,
      salary: salary || "Not Disclosed",
      status,
      source: source || "Not Specified",
      date: new Date().toLocaleDateString(),
      notes: notes || "—",
    });
    navigate("/jobs");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add Job Application</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Job Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Salary / CTC"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <select
          className="w-full border px-4 py-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Source (LinkedIn / Campus / Referral)"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <textarea
          className="w-full border px-4 py-2 rounded"
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Add Job
        </button>
      </form>
    </div>
  );
}
