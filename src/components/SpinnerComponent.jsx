import React from "react";

const SpinnerComponent = () => {
  return (
    <div className="px-auto py-auto w-[300px] md:w-4/5 h-[300px] bg-[#e0f7fa] rounded-2xl shadow-lg flex items-center justify-center">
      {/* Example animation: spinning circle */}
      <div className="w-[100px] h-[100px] border-8 border-[#00bcd4] border-t-white rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerComponent;
