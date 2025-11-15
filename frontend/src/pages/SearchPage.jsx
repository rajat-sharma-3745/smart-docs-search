import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import DocumentCard from "../components/DocumentCard";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { toast } from "sonner";

const dummyData = [
  {
    _id: "1",
    title: "Marketing Strategy 2024",
    snippet: "This document explains the complete marketing roadmap...",
    category: "Marketing",
  },
  {
    _id: "2",
    title: "Competitive Landscape Analysis",
    snippet: "Key competitors launching new product variations...",
    category: "Analysis",
  },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setSort] = useState("recent");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);

    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (category !== "all") params.append("category", category);
    if (from) params.append("from", from);
    if (to) params.append("to", to);
    if (sort) params.append("sort", sort);

    try {
      const { data } = await axiosInstance.get(
        API_PATHS.DOCUMENTS.SEARCH(params)
      );
      setResults(data);
    } catch (error) {
      toast.error((error?.response?.data?.message||error?.message)||"Error fetching documents")
    }

    setLoading(false);
  };

  useEffect(() => {
    const delay = setTimeout(fetchResults, 300);
    return () => clearTimeout(delay);
  }, [query, category, from, to, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10 p-6 ">
      <h1
        className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 
                     bg-clip-text text-transparent tracking-tight mb-10 
                    "
      >
        Search Documents
      </h1>

      <div
        className="bg-white backdrop-blur-xl p-6 rounded-3xl shadow-sm border 
                      border-gray-100 mb-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by title, keywords, or text…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 
                       focus:ring-2 focus:ring-black/80 focus:bg-white transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-500">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 mt-1 rounded-xl bg-gray-50 border border-gray-200 
                         focus:ring-2 focus:ring-black/80 transition"
            >
              <option value="all">All</option>
              <option value="Marketing">Marketing</option>
              <option value="Product">Product</option>
              <option value="Research">Research</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">From</label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 mt-1 rounded-xl bg-gray-50 border border-gray-200 
                         focus:ring-2 focus:ring-black/80 transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">To</label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 mt-1 rounded-xl bg-gray-50 border border-gray-200 
                         focus:ring-2 focus:ring-black/80 transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Sort By</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full p-3 mt-1 rounded-xl bg-gray-50 border border-gray-200 
                         focus:ring-2 focus:ring-black/80 transition"
            >
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Searching…</div>
      ) : results.length === 0 ? (
        <div className="text-center py-20 text-gray-400">No results found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((doc) => (
            <DocumentCard key={doc._id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
