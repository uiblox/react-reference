import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import  SimpleList  from "./pages/SimpleList/index.jsx"
import  SimpleList2  from "./pages/SimpleList2/index.jsx"
import { UseStateDemo } from "./pages/UseStateDemo/index.jsx"
import { UseEffectDemo1 } from "./pages/useEffectDemo1/index.jsx"
import { UseEffectDemo } from './pages/UseEffectDemo/index.jsx'
import { UseRefDemo1 } from "./pages/useRefDemo1/index.jsx"
import { UseCallBackDemo } from "./pages/UseCallBackDemo/index.jsx"
import { NotFound } from './pages/NotFound/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/simpleList",
        element: <SimpleList />
      },
      {
        path: "/simpleList2",
        element: <SimpleList2 />
      },
      {
        path: "/useStateDemo",
        element: <UseStateDemo />
      },
      {
        path: "/useEffectDemo1",
        element: <UseEffectDemo1 />
      },
      {
        path: "/useEffectDemo",
        element: <UseEffectDemo />
      },
      {
        path: "/useRefDemo1",
        element: <UseRefDemo1 />
      },
      {
        path: "/useCallBackDemo",
        element: <UseCallBackDemo />
      },
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
