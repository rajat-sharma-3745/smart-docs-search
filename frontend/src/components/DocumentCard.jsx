import { Link } from "react-router-dom";

const DocumentCard = ({ doc }) => {
  return (
    <Link to={`/document/${doc?._id}`}>
      <div
        className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl border  border-gray-200
                    transition transform hover:-translate-y-1 cursor-pointer 
                    flex flex-col justify-between"
      >
        {/* TITLE - One line only */}
        <h2
          className="text-lg font-semibold mb-3 group-hover:text-indigo-600 
                     transition overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {doc.title}
        </h2>

        {/* CONTENT - Two lines only */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 text-ellipsis">
          {doc.extractedText}
        </p>

        {/* FOOTER - Always at bottom */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          {/* Category */}
          <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
            {doc.categories?.length > 0 ? doc.categories[0] : "Uncategorized"}
          </span>

          {/* Date */}
          <span className="text-xs text-gray-500">
            {new Date(doc.createdAt).toLocaleDateString("en-In", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
