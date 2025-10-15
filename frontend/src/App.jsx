import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
    
    <Router>
      <AppRoutes />
    </Router>
    </div>
  )
}

export default App
