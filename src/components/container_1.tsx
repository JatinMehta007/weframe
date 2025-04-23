"use client"
export default function Container() {
  return (
    <div className="bg-white md:w-[1555px] w-[315px] h-[60px] md:h-[93px] mt-[10px] md:mt-[30px] md:ml-[30px] flex">
      <div className="md:w-[890px] md:h-[54px] md:ml-[653px] mt-[15px] ml-[10px] md:mt-[20px] flex ">
        <div className="flex justify-between   md:w-[649px]  md:h-[54px]">
          <div className="relative md:w-[501px] ">
            <img
              src="/images/search.png"
              alt="search-icon"
              className="md:w-[17px] w-[10px] h-[10px]  bg-[#F8FAFB] md:h-[17px] absolute top-[15px] md:top-1/2 left-[16px] transform -translate-y-1/2 "
            />

            <input
              className="md:w-full w-[200px]  md:h-[50px] h-[30px] pl-[40px] pr-[16px] border-[0.63px] border-[#A0A3BD] placeholder:italic  rounded-xl  shadow-[0_0_5.56px_0_#00000040] text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </div>

          <div className="md:h-[54px] md:w-[54px] h-[32px] w-[32px] p-3 md:p-0 bg-[#E7E8EF] rounded-xl bg-red-60 flex justify-center items-center ml-4 md:ml-0" >
            <img src="images/calendar.png" alt="calender" />
          </div>

          <div className="md:h-[54px] md:w-[54px] h-[32px] w-[32px] p-3 md:p-0 bg-[#E7E8EF] rounded-xl bg-red-60 flex justify-center items-center ml-4 md:ml-0">
            <img src="images/filter.png" alt="filter" />
          </div>
        </div>

        <div className="gap-6 invisible md:visible">
            <button className="bg-[#1C1442] text-xl tracking-[-2%] font-semibold  w-[160px] h-[54px] text-[#FFFFFF] rounded-xl ml-[81px] " >
                Add New Story
            </button>
        </div>
      </div>
    </div>

    
  );
}
