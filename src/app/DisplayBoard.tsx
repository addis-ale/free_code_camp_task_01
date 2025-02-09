import { Quote } from "lucide-react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { LiaLinkedin } from "react-icons/lia";

const DisplayBoard = () => {
  return (
    <div className="max-w-2xl  md:w-[500px] md:h-[300px] flex items-center justify-center border rounded-lg bg-gray-400/20">
      <div className="relative w-full h-full flex flex-col items-center">
        {/* top */}
        <div className="flex-1 flex justify-center items-center px-16 py-8">
          <div className="flex flex-col w-full h-full  gap-4 ">
            <div className="flex gap-2 items-start flex-1 ">
              <Quote size={64} />
              <h2 className="font-bold text-2xl py-2">
                When I let go of what I am, I become what I might be.
              </h2>
            </div>
            <div className="flex justify-end py-2 px-4">
              <p className="text-blue-700">
                - <i>sucks</i>
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <button
                  className="flex justify-center items-center p-4 bg-sky-500 rounded-lg
                "
                >
                  <BiLeftArrow size={24} className="text-white" />
                </button>
                <div className="flex justify-center items-center p-4 bg-sky-500 rounded-lg">
                  <a href="https://www.linkedin.com/in/addis-alemayehu-440942332">
                    <LiaLinkedin size={24} className="text-white" />
                  </a>
                </div>
              </div>
              <button className="flex items-center justify-center bg-sky-500 p-4 rounded-lg">
                <BiRightArrow size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" bg-blue-500 absolute bottom-0 left-0 w-full h-[5px] rounded-xl"></div>
      </div>
    </div>
  );
};

export default DisplayBoard;
