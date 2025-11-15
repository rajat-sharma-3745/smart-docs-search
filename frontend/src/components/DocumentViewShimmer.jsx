export default function DocumentViewShimmer() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">

      <div className="w-40 h-5 bg-gray-200 rounded mb-6"></div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border">

        <div className="h-8 bg-gray-200 rounded w-3/5 mb-4"></div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full w-24"></div>
        </div>

        <div className="h-4 bg-gray-200 rounded w-40 mb-6"></div>

        <div className="bg-gray-50 p-5 rounded-xl border h-[450px] shadow-inner">
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/5"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
