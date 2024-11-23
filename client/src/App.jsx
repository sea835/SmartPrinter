import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App({ role }) {
  const userRole = role; // This should be dynamically set based on the logged-in user
  const bgColor =
    userRole === "admin" ? "from-white to-red-300" : "from-white to-blue-300";

  return (
    <>
      <div className="container w-[1400px] mx-auto items-center text-[15px]">
        <Header role={userRole} />
        <main className={`h-[700px] bg-gradient-to-b ${bgColor}`}>
          <Outlet />
        </main>
        <Footer role={userRole} />
      </div>
    </>
  );
}

export default App;
