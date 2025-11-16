import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen  relative overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-200 via-orange to-purple-200"></div>

      {/* <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-purple-300 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-indigo-300 rounded-full opacity-20 blur-3xl -z-10"></div> */}

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900 tracking-tight">
          Organize knowledge effortlessly.
          <br />
          <span className="text-gray-600">
            Smarter search for your documents.
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
          Upload documents, extract insights, and find information instantly with intelligent search + auto categorization.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/upload"
            className="px-7 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition shadow-lg"
          >
            Upload Document
          </Link>

          <Link
            to="/search"
            className="px-7 py-4 rounded-xl border border-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Search Library
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Lightning Fast Search</h3>
          <p className="text-gray-600">
            Search across titles, extracted text, categories, and metadata with instant results.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Automatic Categorization</h3>
          <p className="text-gray-600">
            Documents are intelligently grouped using keyword-based classification.
          </p>
        </div>

        {/* <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Unified Dashboard</h3>
          <p className="text-gray-600">
            Browse, filter, and manage documents in one clean, intuitive dashboard.
          </p>
        </div> */}

      </section>

      

    </div>
  );
};

export default Home;
