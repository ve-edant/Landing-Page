import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewNavbar from "../components/NewNavbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden min-h-[100%] w-[100%]">
      <NewNavbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
