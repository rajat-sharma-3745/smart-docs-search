import { useEffect, useState } from "react";
import DocumentCard from "../components/DocumentCard";
import DocumentCardShimmer from "../components/DocumentCardShimmer";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { toast } from "sonner";

const DocumentsPage = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDocs = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(API_PATHS.DOCUMENTS.GET);
      if (data) {
        setDocuments(data);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Error fetching documents"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto pt-10 p-6 ">
      <h1
        className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 
                     bg-clip-text text-transparent mb-6"
      >
        All Documents
      </h1>
      {loading && (
        <div className="mb-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm flex items-center gap-2">
          <svg
            className="w-5 h-5 text-yellow-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M4.93 4.93A10 10 0 1 1 19.07 19.07 10 10 0 0 1 4.93 4.93z"
            />
          </svg>
          <span>
            Our server is waking up — this may take a few seconds since it's
            hosted on Render.
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {loading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <DocumentCardShimmer key={i} />
          ))
        ) : documents.length > 0 ? (
          documents.map((doc) => <DocumentCard key={doc._id} doc={doc} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No documents yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default DocumentsPage;
