import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden min-h-[100%] w-[100%]">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
