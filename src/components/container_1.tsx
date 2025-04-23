export default function Container() {
  return (
    <div className="bg-white w-[1555px] h-[93px] mt-[30px] ml-[30px] flex">
      <div className="w-[890px] h-[54px] ml-[653px] mt-[20px] flex ">
        <div className="flex justify-between   w-[649px] h-[54px]">
          <div className="relative w-[501px] ">
            <img
              src="/images/search.png"
              alt="search-icon"
              className="w-[17px]  bg-[#F8FAFB] h-[17px] absolute top-1/2 left-[16px] transform -translate-y-1/2"
            />

            <input
              className="w-full h-[50px] pl-[40px] pr-[16px] border-[0.63px] border-[#A0A3BD] placeholder:italic  rounded-xl  shadow-[0_0_5.56px_0_#00000040] text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </div>

          <div className="h-[54px] w-[54px] bg-[#E7E8EF] rounded-xl bg-red-60 flex justify-center items-center" >
            <img src="images/calendar.png" alt="calender" />
          </div>

          <div className="h-[54px] w-[54px] bg-[#E7E8EF] rounded-xl bg-red-60 flex justify-center items-center">
            <img src="images/filter.png" alt="filter" />
          </div>
        </div>
        <div className="gap-6">
            <button className="bg-[#1C1442] text-xl tracking-[-2%] font-semibold  w-[160px] h-[54px] text-[#FFFFFF] rounded-xl ml-[81px] " >
                Add New Story
            </button>
        </div>
      </div>
    </div>

    
  );
}
