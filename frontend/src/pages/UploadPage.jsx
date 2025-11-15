import { useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['.pdf','.doc','.txt','text/plain','.docx','application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/msword']
    if(!allowedTypes.includes(file.type)){
        toast.warning('File type not allowed')
        return
    }
    setFile(e.target.files[0]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    const allowedTypes = ['.pdf','.doc','.txt','text/plain','.docx','application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/msword']
    if(!allowedTypes.includes(droppedFile.type)){
        toast.warning('File type not allowed')
        return
    }
    else if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file',file)

      const {data} = await axiosInstance.post(API_PATHS.DOCUMENTS.CREATE,formData)
      if(data?.success) toast.success("Document uploaded successfully!")
  
    
    } catch (error) {
        toast.error((error?.response?.data?.message||error?.message)||"Error uploading file")
    } finally {
      setLoading(false);
      setFile(null);
    }
   
  };

  return (
    <div className="max-w-3xl mx-auto pt-10 p-6 ">
      <h1
        className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 
                     bg-clip-text text-transparent mb-8"
      >
        Upload Document
      </h1>

      <div
        className={`w-full h-60 border-2 border-dashed rounded-2xl bg-white 
                    shadow-sm hover:shadow-md transition cursor-pointer
                    flex items-center justify-center text-center px-6 
                    ${
                      dragActive
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-300"
                    }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>

          <p className="font-medium text-gray-700">
            {file
              ? file.name
              : dragActive
              ? "Drop file to upload"
              : "Click or drag a file to upload"}
          </p>

          <p className="text-gray-400 text-sm mt-1">Supports PDF, DOCX, TXT</p>

          <input
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
          />
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className={`mt-6 w-full py-3 rounded-xl font-semibold text-white 
                   transition shadow-md
                   ${
                     !file || loading
                       ? "bg-gray-400 cursor-not-allowed"
                       : "bg-indigo-600 hover:bg-indigo-700"
                   }`}
      >
        {loading ? "Uploading..." : "Upload Document"}
      </button>

     
    </div>
  );
};

export default UploadPage;
