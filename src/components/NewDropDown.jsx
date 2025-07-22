import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const NewDropdownCard = ({
  to,
  setIsSidebarOpen,
  title,
}) => {
  return (
    <Link
      to={to}
      onClick={() => setIsSidebarOpen(false)}
      className={`flex-1 py-1 px-1 border transition rounded-lg relative h-fit`}
    >
      <h4 className=" text-sm text-black">{title}</h4>
    </Link>
  );
};

export default NewDropdownCard;
