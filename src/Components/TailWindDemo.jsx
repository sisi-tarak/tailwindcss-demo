import React from "react";

const TailWindDemo = () => {
  return (
    <>
      <div className="container-fluid mt-10 ml-3 mr-5 mb-0 border-2 border-tahiti-800 sm:bg-yellow-500 md:bg-slate-500 lg:bg-pink-500 xl:bg-indigo-500 2xl:bg-green-500 flex flex-col">
        <h1 className="font-bold line-through border-8 border-orange-500 text-orange-500 ms-5 me-16 pt-px pl-32 text-[50px] w-96">
          {/* utility classes 
        custom css for text size as text-[border-2 border-metalpx/rem/em]
        */}
          Hello world!
        </h1>
        <h1 className="font-bold line-through border-8 border-slate-800 text-bubble-gum mt-10 ms-5 me-16 pt-px pl-32 text-[100px] w-[600px] ">
          width property
        </h1>
        <div className="container mx-auto mt-10 text-center border-2 border-bermuda text-[#1d2329] sm:flex md:flex-1">
          <div className="w-96 border-2 border-purple-700">w-96</div>
          <div className="w-80 border-2 border-purple-700">w-80</div>
          <div className="w-64 border-2 border-purple-700">w-64</div>
          <div className="w-48 border-2 border-purple-700">w-48</div>
          <div className="w-40 border-2 border-purple-700">w-40</div>
          <div className="w-32 border-2 border-purple-700">w-32</div>
          <div className="w-24 border-2 border-purple-700">w-24</div>

          <div class="flex border-2 border-metal">
            <div class="w-1/2 border-2 border-metal ">w-1/2</div>
            <div class="w-1/2 border-2 border-metal ">w-1/2</div>
          </div>
          <div class="flex border-2 border-metal">
            <div class="w-2/5 border-2 border-metal">w-2/5</div>
            <div class="w-3/5 border-2 border-metal">w-3/5</div>
          </div>
          <div class="flex border-2 border-metal">
            <div class="w-1/3 border-2 border-metal">w-1/3</div>
            <div class="w-2/3 border-2 border-metal">w-2/3</div>
          </div>
          <div class="flex border-2 border-metal">
            <div class="w-1/4 border-2 border-metal">w-1/4</div>
            <div class="w-3/4 border-2 border-metal">w-3/4</div>
          </div>
          <div class="flex border-2 border-metal">
            <div class="w-1/5 border-2 border-metal">w-1/5</div>
            <div class="w-4/5 border-2 border-metal">w-4/5</div>
          </div>
          <div class="flex border-2 border-metal">
            <div class="w-1/6 border-2 border-metal">w-1/6</div>
            <div class="w-5/6 border-2 border-metal">w-5/6</div>
          </div>
          <div class="w-full border-2 border-metal">w-full</div>
        </div>
      </div>
    </>
  );
};

export default TailWindDemo;
