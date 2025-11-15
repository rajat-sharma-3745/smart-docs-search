import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center"/>

      <Navbar />

      <main className=" min-h-screen">
        <Outlet /> 
      </main>

    </div>
  );
};

export default MainLayout;
