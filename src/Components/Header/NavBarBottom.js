import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { courseItems } from "../../Constants/Constants";
import { moreItems } from "../../Constants/Constants";

const NavBarBottom = () => {
  const [courseList, setCourseList] = useState(false);
  const [moreList, setMoreList] = useState(false);
  console.log(courseList);
  return (
    <div className="pb-6">
      <div className="max-w-6xl mx-auto ">
        <div className="hidden xxl:inline-flex justify-center items-center gap-16 font-poppins font-semibold text-gray-800 ">
          {/* course dropdown*/}
          <div className="relative">
            <span onClick={() => setCourseList(!courseList)}>
              Course
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </span>
            {courseList && (
              <div>
                <ul className="absolute w-60 h-52 bg-white top-10 left-5 shadow-dropDownShadow flex flex-col gap-1 z-50 rounded-md">
                  {courseItems.map((items) => (
                    <li
                      key={items.id}
                      className="text-sm text-gray-500 cursor-pointer font-poppins px-2  flex justify-between pb-1 pt-2"
                    >
                      {items.title}
                      <NavigateNextIcon />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/*navlist*/}

          <span>PW Skills Lab</span>
          <span>Job Portal</span>
          <span>Experience Portal</span>
          <span>Become an Affiliate</span>
          <span>Hall of Fame</span>

          {/*more dropdown*/}
          <div className="relative">
            <span onClick={() => setMoreList(!moreList)}>
              More
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </span>
            {moreList && (
              <div>
                <ul className="absolute w-52 h-auto bg-white  top-10 right-5 flex flex-col gap-1 z-50 rounded-md shadow-dropDownShadow">
                  {moreItems.map((e) => (
                    <li
                      key={e.id}
                      className="text-sm text-gray-500 cursor-pointer font-poppins px-2 py-2"
                    >
                      {e.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarBottom;
