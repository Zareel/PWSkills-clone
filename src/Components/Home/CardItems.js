import React from "react";

const CardItems = ({ id, image, title, teacher, status }) => {
  return (
    <div className="shadow-cardShadow rounded-lg flex flex-col items-start justify-start bg-white py-4 mx-12 lg:mx-6 px-2">
      <div className="flex justify-center">
        <img className="w-[90%] pt-4 pb-1" src={image} alt="card" />
      </div>
      <div className="px-5">
        <h2 className="text-[#5a4bda] text-2xl fort-roboto font-semibold pb-8 ">
          {title}
        </h2>
        <p className="text-md text-gray-700 font-poppins">{teacher}</p>
        <h2 className="font-roboto font-semibold text-lg text-gray-800 py-2 pb-4">
          {status}
        </h2>
      </div>
    </div>
  );
};

export default CardItems;
