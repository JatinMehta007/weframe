export default function Navbar() {
    return (
        <nav className=" top-0 left-0 flex justify-between items-center right-0 h-[92px] w-[1623px] shadow-[0_4px_10px_rgba(182,182,182,0.1)] z-50 bg-white">
            <div className=" ml-[103px] font-bold" id="urbanist">
                ← Stories
            </div>
            <div className="mr-20 w-[297px] h-[53px] rounded-[8px] border-[1px] border-[#E8EFF7] justify-center items-center flex gap-[10px]">
                <img src="/images/girl.png" alt="" className="w-[33.21px] h-[33.21px] rounded-[5px]"/>
                <div className="w-[203px] h-[38px]  text-[#373B5C]">
                    <p className="text-[10px] font-medium ">Welcome back,</p>
                    <p className="text-[17px]">Akshita Patel</p>
                </div>
                <div>
                    <img src="/images/arrow.png" alt="down-arrow" className="w-[15.5px] h-[8.5px] left-[4.25px] text-[#1E2875]" />
                </div>
            </div>
        </nav>
    );
}