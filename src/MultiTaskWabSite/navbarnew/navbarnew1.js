import {  Outlet } from "react-router-dom";
import './navbarnew.css'
const Naavbar = ()=>{
    return(
        <div>
           <div className="md:mb-[20px] md:ml-[40px] font-bold md:w-[100px] shadow-md rounded-lg hover:shadow-lg hover:shadow-purple-600 hover:scale-110 ">Categories</div>
           <div>
               <a href="repair" > <div className="md:pr-[100px] md:pl-[10px] md:py-[10px]  md:m-[30px] font-bold text-orange-700 border-purple-800 rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out "  > Repair </div> </a>
               <a href="painting" > <div className="md:pr-[100px] md:pl-[10px] md:py-[10px]  md:m-[30px] font-bold text-orange-700 border-purple-800 rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out "> Painting </div> </a>
               <a href="shifting" > <div className="md:pr-[100px] md:pl-[10px] md:py-[10px]  md:m-[30px] font-bold text-orange-700 border-purple-800 rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out "> Shifting </div> </a>
               <a href="cleaning" > <div className="md:pr-[100px] md:pl-[10px] md:py-[10px]  md:m-[30px] font-bold text-orange-700 border-purple-800 rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out ">  Cleaning</div> </a>
               <a href="electric" ><div className="md:pr-[100px] md:pl-[10px] md:py-[10px]   md:m-[30px] font-bold text-orange-700 border-purple-800 rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out ">Electric</div></a>
               <a href="plumbing" ><div className="md:pr-[100px] md:pl-[10px] md:py-[10px]   md:m-[30px] font-bold text-orange-700 border-purple-800 rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out ">Plumbing</div></a>
              <main> 
                <Outlet/>
              </main>
          </div>
        </div>
    )
}
export default Naavbar