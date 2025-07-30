import { Outlet } from "react-router-dom"
import { Nav } from "./components/Nav/index"

function App() {
  return (
    <div className="layout-wrapper">
      <Nav />
      <Outlet />
    </div>    
  )
}

export default App
