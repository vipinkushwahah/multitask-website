import "./home.css"
import hh from "./assets/d.png"
import t from "./assets/t.png"
import m from "./assets/m.png"
import twiter from "./assets/arroba.png"
import email from "./assets/twitter.png"
import electric from './assets/electrician.png'
import tools from './assets/tools.png'
const Home = ()=>{
    return(
        <div className="md:border-8 md:flex rounded-xl md:border-red-800 md:h-[855px] md:m-[5px]">
            <div className="md:ml-[60px] ml-2">
                
                <div className="mt-[100px] md:font-bold md:text-4xl font-semibold text-xl">
                <img className="homeservicelogo5" src={m} alt="m"/>
                    THE EXPERT
                    </div>
                <div className="md:font-extrabold md:text-6xl font-bold text-5xl">IN HOME <span className="text-purple-900">SERVICES</span></div>
                <div className="homenewflex">
                    <div >
                        <img className="homelogo" src={hh} alt="d"/>
                    </div>
                    <div className="homedistance">
                        <div className="colorred">24 hs. Emergency Services</div>
                        <div className="fontstyle">No Job Too Small</div>
                    </div>
                </div>
                <div>
                    <div className="aboutus">About Us</div>
                    <div className="md:w-[450px] w-[275] mt-[20px] font-serif ">
                    Expert Home Repair Services to Keep Your Home Safe and Beautiful.
                    We provide an compalet servce as we care for your safety and comfert.
                    please give an chance to help you in your work Thank you
                    </div>
                    <button className="btn1">READ MORE</button>
                </div>
                <div className="flex md:translate-x-[-22px]">
                    <div>
                            <div className="triangle">
                                <div><img className="twitter" src={twiter} alt=""/></div>
                                <div><img className="twitter" src={email} alt=""/></div>
                                <div><img className="twitter" src={twiter} alt=""/></div>
                            </div>
                    </div>
                    <div className=" flex md:translate-x-[-22px] md:translate-y-[-60px] translate-x-[-140px] translate-y-[-108px]">
                        <div>
                         <img className="cellphone" src={t} alt="call"/>
                        </div>
                        <div>
                        <div className="cellpone2">CALL US NOW   <span className="cellpone3">WWW.yourwebsite.com</span></div>
                        <div ><span className="cellpone1">7420868346  </span>   <span className="cellpone3">vipinkushwaha902@gmail.com</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex md:h-[600px] hidden">
                 <div className="linespace">
                    <div className="ediv"> 
                    <div className="lineone1"></div>
                    <div className="lineone2"></div>
                    <div className="lineone"></div>
                    </div>
                    <div className="squreone">
                      <img className="electric" src={electric} alt="e"/>
                    </div>
                    <div className="squretwo">
                       <img className="tools" src={tools} alt="t"/>
                    </div>
                    <div className="transform">
                    <div className="linetwo"></div>
                    </div>
                 </div>
                 <div className="newclass">
                  <img className="newimage" src="https://static.vecteezy.com/system/resources/previews/006/840/908/non_2x/service-technician-semi-flat-rgb-color-illustration-male-repairman-standing-in-confident-pose-isolated-cartoon-character-on-white-background-vector.jpg" alt="g"/>
                 </div>
            </div>
        </div>
    )
}
export default Home