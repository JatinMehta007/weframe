import Container from "../components/container_1";
import Container_2 from "../components/container_2";
import Container_3 from "../components/container_3";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
   
    <main id="main" className=" bg-zinc-100 w-[1623px] ">
      <div className="grid grid-cols-[297px_1fr] w-[1623px] gap-1">
      <div className="">
      <Sidebar/>
      </div>
      <div className="bg-zinc-100"> 
      <Navbar/>
      <div className=" ">
    <Container/>
    <Container_2/>
    <Container_3/>
      </div>
      </div>
      </div>
    </main>
  );
}
