import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewNavbar from "../components/NewNavbar";
import ColorTransitionBar from "../components/ColorTransitionBar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white text-black  transition-colors duration-300 overflow-x-hidden min-h-[100%] w-[100%]">
      <NewNavbar />
      <main className="pt-16">{children}</main>
      <ColorTransitionBar />
      <Footer />
    </div>
  );
};

export default MainLayout;
