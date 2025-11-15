// ShimmerCard.jsx
export default function DocumentCardShimmer() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200
                    flex flex-col justify-between animate-pulse">

    
      <div className="h-5 bg-gray-200 rounded-md mb-3 w-3/4"></div>


      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
      </div>

  
      <div className="mt-auto pt-3 flex items-center justify-between">
  
        <div className="h-5 bg-indigo-100 rounded-full w-20"></div>

        <div className="h-4 bg-gray-200 rounded-md w-16"></div>
      </div>
    </div>
  );
}
