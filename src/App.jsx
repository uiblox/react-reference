import { Outlet, useLocation } from "react-router-dom"
import { Nav } from "./components/Nav/index"

function App() {

  const location = useLocation();

  return (
    <div className="layout-wrapper">
      <Nav />
      {location.pathname === "/" ? <div>Welcome to a quick run through of React stuff 🔥 </div> : <Outlet />}
    </div>    
  )
}

export default App
