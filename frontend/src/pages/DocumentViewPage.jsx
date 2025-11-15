import { useEffect, useState } from "react";
import { RxArrowLeft } from "react-icons/rx";
import { useParams, Link } from "react-router-dom";
import DocumentViewShimmer from "../components/DocumentViewShimmer";
import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { ArrowLeft } from "lucide-react";

const DocumentViewPage = () => {
  const { id } = useParams();

  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get(
          API_PATHS.DOCUMENTS.GETBYID(id)
        );
        setDoc(data);
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, [id]);

  function formatDate(time) {
    const date = new Date(time);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let month = months[date.getMonth() + 1];
    let dayName = days[date.getDay()];
    let day = date.getDate();
    let year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${dayName}  ${day}${getOrdinal(
      day
    )} ${month} ${year} • ${hours}:${minutes} ${ampm}`;
  }
  function getOrdinal(n) {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  if (loading) {
    return <DocumentViewShimmer />;
  }

  if (!doc) {
    return (
      <div className="max-w-4xl mx-auto text-center mt-12 text-red-600">
        Document not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 pt-10 p-6 ">
      <Link
        to="/documents"
        className="flex items-center gap-2 mb-3 sm:mb-2 text-gray-700 hover:text-black transition font-medium text-sm sm:text-base"
      >
        <ArrowLeft size={18} /> Back to Documents
      </Link>

      <div className="bg-white p-4 sm:p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 overflow-hidden sm:overflow-visible text-ellipsis whitespace-nowrap">
          {doc.title.split(".")[0]}
        </h1>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          {doc.categories.length > 0 &&
            doc.categories.map((cat, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 font-medium"
              >
                {cat}
              </span>
            ))}

          <span className="text-xs sm:text-sm text-gray-500 ml-auto bg-orange-100 p-1 rounded ">
            Uploaded on: {formatDate(doc.createdAt)}
          </span>
        </div>

        <hr className="my-4 sm:my-6 border-gray-200" />

        <div
          className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 
                    h-72 sm:h-96 md:h-[500px] overflow-y-auto shadow-inner 
                    leading-relaxed text-gray-800 whitespace-pre-line text-sm sm:text-base"
        >
          {doc.extractedText}
        </div>

        <div className="mt-6 sm:mt-8 flex justify-end">
          <a
            href={doc?.fileUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 sm:px-5 py-2.5 sm:py-3 bg-black text-white rounded-xl text-sm sm:text-base hover:bg-gray-900 transition font-medium">
              Download Original File
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewPage;
