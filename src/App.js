import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import "./App.css";
import {
  Navbar,
  Footer,
  Home,
  Detect,
  NotFound,
  Dashboard,
} from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyMsg = (type, msg) => {
  if (type === "success") {
    const notify = () => toast.success(msg);
    notify();
  } else {
    const notify = () => toast.error(msg);
    notify();
  }
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar notifyMsg={notifyMsg} />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect root path ("/") to "/detect" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/detect"
          element={
            <Layout>
              <Detect />
            </Layout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;