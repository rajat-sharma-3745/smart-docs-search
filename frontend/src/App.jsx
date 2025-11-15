import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import DocumentsPage from "./pages/DocumentPage"
import SearchPage from "./pages/SearchPage"
import UploadPage from "./pages/UploadPage"
import DocumentViewPage from "./pages/DocumentViewPage"
import Home from "./pages/Home"

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/documents',
          element:<DocumentsPage/>
        },
        {
          path:'/search',
          element:<SearchPage/>
        },
        {
          path:'/upload',
          element:<UploadPage/>
        },
        {
          path:'/document/:id',
          element:<DocumentViewPage/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
