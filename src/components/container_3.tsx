export default function Container_3() {
  return (
    <div className="w-[1450px] h-[500px] ml-[53px] gap-[30px]   mt-[20px] flex rounded-4xl ">

      <div className="w-[340px] h-[500px] rounded-xl relative    ">
        <div className="bg-bannerImg">
          {/* <img
            src="images/image1.jpg"
            alt=""
            className="bg-cover bg-no-repeat absolute inset-0 bg-blackOverlay"
          /> */}
          <div> </div>
          <div>
            <p className="w-[302px] h-[107px] left-[19px] absolute top-[308px]  text-white  font-semibold text-2xl">
              How 7 line code turned into $36 Billion Empire
              <div className="flex  gap-[10px]">
            <p className="text-base mt-[17px] font-extrabold ">BUSINESS · <span className="text-[#A0A3BD] text-sm font-semibold">20 Sep 2022</span> </p>
            <button className="w-[108px] h-[40px] mt-1  bg-yellow-300 rounded-md"><span className="font-semibold text-base flex justify-center items-center">Published</span></button>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[340px] h-[500px]">
        <img src="images/image1.jpg" alt="" />
      </div>

      <div className="w-[340px] h-[500px]">
        <img src="images/image1.jpg" alt="" />
      </div>

      <div className="w-[340px] h-[500px]">
        <img src="images/image1.jpg" alt="" />
      </div>
    </div>
  );
}
