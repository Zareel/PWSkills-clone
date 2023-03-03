import React from "react";

const StatsItems = ({ id, image, count, title }) => {
  return (
    <div className="w-full flex flex-col items-center py-14 gap-6 statdiv">
      <img src={image} alt="books" />
      <p className="text-4xl text-gray-800 font-roboto font-semibold statp">
        {count}+
      </p>
      <h2 className="text-gray-500 text-3xl font-semibold font-roboto tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default StatsItems;
