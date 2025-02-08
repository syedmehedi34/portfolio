import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
