import React from "react";
import img23 from "./img23.png";
import { useNavigate } from "react-router-dom";

const MergeEditDuplicateData = () => {

    const navigate = useNavigate();

  return (
    <>
      <div className="w-[100%] pt-20 h-[100vh] bg-blue-500 lg:flex gap-10 xl:gap-80 px-5">
        <div className="flex flex-row lg:flex-col justify-center items-center lg:ms-3 w-full md:w-1/2 lg:w-[25%]">
          <div className="mx-6 inline-block align-bottom lg:mt-2  bg-teal-100 rounded-xl  text-left shadow-md transform transition-all  sm:align-middle  w-[90%] lg:w-full">
            <div className="px-4 py-2 lg:py-3">
              <div className="sm:flex w-full">
                <div className="text-center  sm:text-left w-full">
                  <div className=" font-semibold my-2 overflow-x-auto lg:overflow-y-auto lg:h-[70vh]">
                    <div className="divide-y divide-gray-100 text-sm">
                      <div className="flex lg:block">
                        <div className="flex flex-col lg:flex-row justify-center">
                          <div className="py-2 px-2 text-center lg:w-1/2">
                            DATA1
                          </div>
                          <div className="py-2 p-2 px-2 text-center lg:w-1/2">
                            <input
                              className="text-center p-2 rounded-3xl lg:w-11/12"
                              type="text"
                              value={202}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center">
                          <div className="py-2 px-2 text-center lg:w-1/2">
                            DATA1
                          </div>
                          <div className="py-2 p-2 px-2 text-center lg:w-1/2">
                            <input
                              className="text-center p-2 rounded-3xl lg:w-11/12"
                              type="text"
                              value={202}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center">
                          <div className="py-2 px-2 text-center lg:w-1/2">
                            DATA1
                          </div>
                          <div className="py-2 p-2 px-2 text-center lg:w-1/2">
                            <input
                              className="text-center p-2 rounded-3xl lg:w-11/12"
                              type="text"
                              value={202}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center">
                          <div className="py-2 px-2 text-center lg:w-1/2">
                            DATA1
                          </div>
                          <div className="py-2 p-2 px-2 text-center lg:w-1/2">
                            <input
                              className="text-center p-2 rounded-3xl lg:w-11/12"
                              type="text"
                              value={202}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center">
                          <div className="py-2 px-2 text-center lg:w-1/2">
                            DATA1
                          </div>
                          <div className="py-2 p-2 px-2 text-center lg:w-1/2">
                            <input
                              className="text-center p-2 rounded-3xl lg:w-11/12"
                              type="text"
                              value={202}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center">
                          <div className="py-2 px-2 text-center lg:w-1/2">
                            DATA1
                          </div>
                          <div className="py-2 p-2 px-2 text-center lg:w-1/2">
                            <input
                              className="text-center p-2 rounded-3xl lg:w-11/12"
                              type="text"
                              value={202}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-12 lg:flex-row lg:pt-2 lg:pb-1  px-4 lg:px-7 w-[25%] lg:w-full">
      <button
        onClick={() => setEditModal(false)}
        class="group inline-block rounded-3xl bg-blue-500 p-[2px] text-white hover:bg-indigo-600 focus:outline-none focus:ring active:text-opacity-75"
      >
        <span class="block rounded-sm  text-center lg:px-8 py-2 text-md font-medium group-hover:bg-transparent">
          Back
        </span>
      </button>
      <button
        onClick={onUpdateCurrentDataHandler}
        class="group inline-block rounded-3xl bg-blue-500 p-[2px] text-white hover:bg-indigo-600 focus:outline-none focus:ring active:text-opacity-75"
      >
        <span class="block rounded-sm  text-center lg:px-8 py-2 text-md font-medium group-hover:bg-transparent">
          Save
        </span>
      </button>
    </div> */}
            <div className="flex  justify-around pb-3 lg:pb-5  px-4 lg:px-7 lg:w-full">
              <button class="group inline-block rounded-3xl bg-blue-500 p-[2px] text-white hover:bg-indigo-600 focus:outline-none focus:ring active:text-opacity-75">
                <span class="block rounded-sm  px-10 py-2 text-md font-medium group-hover:bg-transparent"
                onClick={() => {
                  navigate("/merge/duplicate/data");
                }}
                >
                  Back
                </span>
              </button>
              <button class="group inline-block rounded-3xl bg-blue-500 p-[2px] text-white hover:bg-indigo-600 focus:outline-none focus:ring active:text-opacity-75">
                <span class="block rounded-sm  px-10 py-2 text-md font-medium group-hover:bg-transparent">
                  Save
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-white text-xl text-center mb-3">1 out of 1</h1>
          <img src={img23} alt="image" />
        </div>
      </div>
    </>
  );
};

export default MergeEditDuplicateData;
