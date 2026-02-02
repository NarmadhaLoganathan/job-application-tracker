import { Link } from "react-router-dom";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-indigo-600">
          <BriefcaseIcon className="h-7 w-7" />
          <span className="font-bold text-xl">JobTracker</span>
        </div>

        <div className="flex gap-6 font-medium">
          {["Home", "Jobs", "Add Job", "Profile"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="relative hover:text-indigo-600 transition after:absolute after:w-0 after:h-[2px] after:bg-indigo-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
