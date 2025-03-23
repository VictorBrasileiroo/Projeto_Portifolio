import React from "react";

const Categories = ({ icon: Icon, children, className = "" }) => {
  return (
      <div className="px-3 py-1.5 bg-gray-800 flex items-center gap-2 rounded-xl">
        {Icon && <Icon className="text-green-500" />}
        <h5 className="font-Golos text-green-500">{children}</h5>
      </div>
  );
};

export default Categories;