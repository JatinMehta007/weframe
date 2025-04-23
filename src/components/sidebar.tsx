
export default function Sidebar() {
  return (

   <div className="h-[2319px]  bg-white gap-8" id="winky-rough">
    <div className="w-[233px] h-[646px] pt-[140px] ml-[32px] gap-8 flex flex-col text-black">

        <div className="flex  gap-[16px] pl-[20px] ">
            <img src="/images/home-2.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Dashboard</p>
        </div>

        <div className="flex bg-[#1C1442] rounded-xl gap-[10px] pl-[20px] pb-[16px] pt-[16px] pr-[20px] ">
            <img src="/images/document-text.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center text-white ">Content</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/user-square.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">User</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/profile-2user.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Task</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/monitor-mobbile.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">App/Web</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/status-up.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Analytics</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/video-square.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Media</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/customize.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Customize</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/notification.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Notifications</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/subs.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Subscription</p>
        </div>


        <div className="flex  gap-[16px] pl-[20px]  ">
            <img src="/images/Setting.png" alt="Dashboard"  />
            <p className="font-semibold text-sm flex justify-center items-center">Setting</p>
        </div>


    </div>

    <div className="mt-[238px]   pl-[33px] ">
    <div className=" bg-[#E8E9FF] rounded-xl  gap-[10px] w-[232px] h-[46px] flex pl-[16px] items-center ">
        <img src="/images/contact.png" alt="contact" />
        <p className="text-sm">Contact Support</p>
    </div>
    </div>
   </div>
   
  );
}
