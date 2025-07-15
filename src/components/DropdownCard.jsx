import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const DropdownCard = ({ to, title, description, bgColor = "bg-yellow-100" }) => {
  return (
    <Link
      to={to}
      className={`flex-1 py-3 px-4 border ${bgColor} transition rounded-lg relative h-full`}
    >
      <div className="flex flex-col justify-between h-full pr-10">
        <div>
          <h4 className="font-bold text-2xl text-black">{title}</h4>
          <p className="text-sm text-black mt-1 whitespace-pre-line">{description}</p>
        </div>
      </div>
      <CgArrowLongRight
        size={41}
        color="#000"
        className="absolute bottom-0 right-4"
      />
    </Link>
  );
};

export default DropdownCard;
