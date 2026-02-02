import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

const initialJobs = [
  {
    company: "Zoho",
    role: "Software Developer",
    status: "Rejected",
    salary: "8 LPA",
    date: "10 Jan 2026",
    source: "Company Website",
    notes: "Resume shortlisted, waiting for HR call",
  },
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    status: "Interview",
    salary: "4.5 LPA",
    date: "05 Jan 2026",
    source: "Campus Placement",
    notes: "Technical interview cleared, HR round pending",
  },
  {
    company: "TCS",
    role: "Java Developer",
    status: "Applied",
    salary: "6.5 LPA",
    date: "20 Dec 2025",
    source: "NQT Exam",
    notes: "Offer letter received via email",
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst",
    status: "Offer",
    salary: "6.75 LPA",
    date: "15 Jan 2026",
    source: "LinkedIn",
    notes: "Applied through LinkedIn Easy Apply",
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    status: "Applied",
    salary: "3.5 LPA",
    date: "18 Jan 2026",
    source: "Campus Placement",
    notes: "Online assessment completed",
  },
  {
    company: "Innova Solutions",
    role: "Junior Software Engineer",
    status: "Rejected",
    salary: "Not Disclosed",
    date: "12 Jan 2026",
    source: "Employee Referral",
    notes: "HR discussion done, technical round scheduled",
  },
  {
    company: "Freshworks",
    role: "Graduate Engineer Trainee",
    status: "Rejected",
    salary: "7 LPA",
    date: "02 Jan 2026",
    source: "Company Website",
    notes: "Rejected after technical interview",
  },
  {
    company: "KPIT Technologies",
    role: "Software Engineer – Trainee",
    status: "Applied",
    salary: "5 LPA",
    date: "22 Jan 2026",
    source: "Campus Placement",
    notes: "Waiting for aptitude test results",
  },
  {
    company: "HCL Technologies",
    role: "Graduate Trainee",
    status: "Rejected",
    salary: "4 LPA",
    date: "08 Jan 2026",
    source: "Naukri",
    notes: "Cleared aptitude, technical round next week",
  },
  {
    company: "StartupX Labs",
    role: "Frontend Developer Intern",
    status: "Rejected",
    salary: "25k / month",
    date: "25 Jan 2026",
    source: "AngelList",
    notes: "Remote internship offer accepted",
  },
];


export default function App() {
  const [jobs, setJobs] = useState(initialJobs);

  const addJob = (job) => setJobs([...jobs, job]);
  const deleteJob = (index) =>
    setJobs(jobs.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs jobs={jobs} deleteJob={deleteJob} />} />
        <Route path="/add-job" element={<AddJob addJob={addJob} />} />
        <Route path="/profile" element={<Profile />} />
        

      </Routes>
      <Footer />

    </div>
  );
}
