"use client"
export default function Navbar() {
    return (
        <nav className=" top-0 left-0 flex justify-between w-[320px] items-center right-0  md:h-[92px] md:w-[1623px] shadow-[0_4px_10px_rgba(182,182,182,0.1)] z-50 bg-white">
            <div className="md:ml-[103px] font-bold font-ubranist md:text-3xl  ">
                ← Stories
                
            </div>
            <div className="md:mr-20 md:w-[297px] md:h-[53px] rounded-[8px] border-[1px] border-[#E8EFF7] justify-center items-center flex gap-[10px]">
                <img src="/images/girl.png" alt="" className="md:w-[33.21px] md:h-[33.21px] w-5 h-5 rounded-[5px]"/>
                <div className="md:w-[203px] md:h-[38px]  text-[#373B5C]">
                    <p className="text-[8px] md:text-[10px] font-medium ">Welcome back,</p>
                    <p className="md:text-[17px] text-[10px]">Akshita Patel</p>
                </div>
                <div>
                    <img src="/images/arrow.png" alt="down-arrow" className="w-[15.5px] h-[8.5px] md:left-[4.25px] text-[#1E2875] mr-2" />
                </div>
            </div>
        </nav>
    );
}