"use client"
export default function Sidebar() {
  return (

   <div className="md:h-[2319px] w-[100px] bg-white gap-8" id="winky-rough">
    <div className="md:w-[233px] md:h-[646px] pt-[140px] md:ml-[32px] gap-8 flex flex-col text-black">

        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px] pl-1 ">
            <img src="/images/home-2.png" alt="Dashboard" className="" />
            <p className="font-semibold md:text-sm text-[10px]  flex justify-center items-center">Dashboard</p>
        </div>

        <div className="flex bg-[#1C1442] rounded-xl gap-[10px] md:pl-[20px] pl-1 pb-[16px] pt-[16px] pr-[20px] ">
            <img src="/images/document-text.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center text-white ">Content</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px] pl-1 ">
            <img src="/images/user-square.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">User</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px]  pl-1">
            <img src="/images/profile-2user.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Task</p>
        </div>

        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px] pl-1 ">
            <img src="/images/monitor-mobbile.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">App/Web</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px] pl-1 ">
            <img src="/images/status-up.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Analytics</p>
        </div>

        
        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px]  pl-1">
            <img src="/images/video-square.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Media</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px]  pl-1">
            <img src="/images/customize.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Customize</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px]  pl-1">
            <img src="/images/notification.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Notifications</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px]  pl-1">
            <img src="/images/subs.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Subscription</p>
        </div>


        <div className="flex md:gap-[16px] gap-[5px] md:pl-[20px]  pl-1">
            <img src="/images/Setting.png" alt="Dashboard"  />
            <p className="font-semibold md:text-sm text-[10px] flex justify-center items-center">Setting</p>
        </div>


    </div>

    <div className="md:mt-[238px] mt-[20px]  md:pl-[33px] ">
    <div className=" bg-[#E8E9FF] rounded-xl   gap-[10px] md:w-[232px] md:h-[46px] flex pl-[16px] items-center ">
        <img src="/images/contact.png" alt="contact" />
        <p className="md:text-sm text-[6px]">Contact Support</p>
    </div>
    </div>
   </div>
   
  );
}
