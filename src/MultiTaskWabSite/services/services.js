import "./services.css"
import cleaning from './assets/aernish.png'
import electeric from './assets/electeric.png'
import repair from './assets/repair.png'
import search from './assets/search.png'
import shift from './assets/shift.png'
import plumbing from './assets/plumbing.png'
import mop from './assets/mop.png'
import { useState } from "react"
import Book from "../booknow/book"

const Services = ()=>{
    const [openDetailsPage, setOpenDetailsPage] = useState(false);
    const [detailsPageData, setDetailsPageData] = useState({image:"", categery:"", name:"", Service1:"", address:"",image1:"", image2:"", image3:"", image4:"" , email:"", number:"0"})

    let Info = [
        {name:"shivam",address:"Lucknow Utter Pradesh",Service1:"House Cleaning",categery:"cleaning",image:"./logo512.png",number:"7920340897",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG",email:"vipinkushwaha902@gmail.com"}
    ]

    let Info2 = [
        {name:"vikas kumar",address:"bangara bazar",Service1:"Shifting",categery:"shifting",email:"vikas@gmail.com",number:"7907345807",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
    ]
    
    let Info3 = [
        {name:"Sonu kumar",address:"lohari bari",Service1:"Electrician",categery:"electrical",email:"sonu@gmail.com",number:"7927045890",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
    ]

    let Info4 = [
        {name:"Mukesh kumar",address:"padari bazar",Service1:"Repair",categery:"Repair",email:"mukesh@gmail.com",number:"7927345897",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
    ]

    let Info5 = [
        {name:"Harikesh kumar",address:"parasiya",Service1:"Plumbing",categery:"Plumbing",email:"harikesh@gmail.com",number:"7927346392",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
    ]

    let Info6 = [
        {name:"Ravi kumar",address:"bakhari bazar",Service1:"Painting",categery:"Painting",email:"ravi@gmail.com",number:"7420868346",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
    ]
   
    const detailsPage = (image, categery, name, Service1,address,image1, image2, image3, image4, email,number)=>{
        setDetailsPageData(pre=>{
            return {...pre, image, categery, name, Service1,address,image1, image2, image3, image4, email,number}
        })
        setOpenDetailsPage(true);
    };
      
    const Service = (image,name,Service1,address,categery,image1, image2, image3, image4, email,number) =>{
        return(
            <div>
        <div><img className="h-[150px] md:h-[200px] object-cover rounded-lg"  src={image} alt="y"/></div>
                <div className="text-purple-800  bg-purple-200 p-1 px-2 text-[12px] border border-solid w-[70px] rounded-full">{categery}</div>
                <div className=" font-bold text-lg">{Service1}</div>
                <div className="text-purple-900 text-pretty font-[500] "> {name}</div>
                <div className="  text-gray-500 text-sm">{address}</div>
                <div><button className='rounded-lg mt-4 p-1 px-2 text-white bg-purple-900' onClick={()=>detailsPage(image,name,Service1,address,categery,image1, image2, image3, image4, email,number)}>Book Now</button></div>
                </div>
        )
            }
    
    return openDetailsPage ? (
        <>
          <Book categery={detailsPageData.categery} Service1={detailsPageData.Service1} address={detailsPageData.address} number={detailsPageData.number} image1={detailsPageData.image1} image2={detailsPageData.image2} image3={detailsPageData.image3} image4={detailsPageData.image4} name={detailsPageData.name} image={detailsPageData.image} email={detailsPageData.email}  />
        </>
      ) : (
        <div className="flex items-center gap-3 flex-col justify-center pt-14 pb-7 ">
            <div className="text-5xl text-center font-extrabold ">
                Find Home <span className="text-purple-600">Service/Repair</span> <br/> Near You
            </div>

            <div className="text-xl text-gray-800">Explore Best Home Service & Repair near you</div>
            <div className="mt-2 flex gap-4 items-center">
                <input className="rounded-full md:w-[350px] border border-black" type="text" placeholder=" home service near you" />
                <button className="rounded-full h-[50px]">
                <img className='h-6 w-6' src={search} alt="seach"/>
                </button>
            </div>
           

            <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                 <a href="cleaning" >
                 <div className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 hover:shadow-lg hover:shadow-purple-600 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out" >
                    <img className="serviceplumbing" src={cleaning} alt="p"/>
                    <div className="text-purple-800">Cleaning</div>
                 </div>
                </a>
                <a href="painting" >
                 <div className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 hover:shadow-lg hover:shadow-purple-600 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
                       <img className="serviceplumbing" src={mop} alt="p"/>
                       <div className="text-purple-800">Painting</div>
                 </div>
                 </a>
                 <a href="shifting">
                  <div className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 hover:shadow-lg hover:shadow-purple-600 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
                        <img className="serviceplumbing" src={shift} alt="p"/>
                         <div className="text-purple-800">Shifting</div>
                  </div>
                  </a>
                  <a href="plumbing">
                   <div className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 hover:shadow-lg hover:shadow-purple-600 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
                         <img className="serviceplumbing" src={plumbing} alt="p"/>
                         <div className="text-purple-800">Plumbing</div>
                   </div>
                   </a>
                   <a href="electric">
                    <div className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 hover:shadow-lg hover:shadow-purple-600 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
                         <img className="serviceplumbing" src={electeric} alt="p"/>
                         <div className="text-purple-800">Electric</div>
                    </div>
                    </a>
                    <a href="repair">
                     <div className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 hover:shadow-lg hover:shadow-purple-600 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
                         <img className="serviceplumbing" src={repair} alt="p"/>
                         <div className = "text-purple-800">Repair</div>
                     </div>
                     </a>     
            </div>


            <div className="font-bold text-[22px] ">Popular Business</div>
            
            <div className="mt-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Info.map(details=>(
               <div className="flex flex-col    shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}
                

                {Info2.map(details=>(
               <div className="flex flex-col    shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                {Info3.map(details=>(
               <div className="flex flex-col    shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                 {Info4.map(details=>(
               <div className="flex flex-col    shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                 {Info5.map(details=>(
               <div className="flex flex-col    shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                 {Info6.map(details=>(
               <div className="flex flex-col    shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}
            
            </div>
        </div>
    )
}
export default Services