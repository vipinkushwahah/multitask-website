import Naavbar from "../navbarnew/navbarnew1";
import { useState } from "react";
import Book from "../booknow/book"

const Plumbing = ()=>{

  const [openDetailsPage, setOpenDetailsPage] = useState(false);
  const [detailsPageData, setDetailsPageData] = useState({image:"", categery:"", name:"", Service1:"", address:"",image1:"", image2:"", image3:"", image4:"" , email:"", number:"0"})

  let Info = [
      {name:"shivam",address:"Lucknow Utter Pradesh",Service1:"House Plumbing",categery:"Plumbing",image:"./logo512.png",number:"7920340897",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG",email:"vipinkushwaha902@gmail.com"}
  ]

  let Info2 = [
      {name:"arvind kumar",address:"gkp",Service1:" Water Pipe Leakage",categery:"Plumbing",email:"arvind@gmail.com",number:"7907345807",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
  ]
  
  let Info3 = [
      {name:"rajeev kumar",address:"bhatava",Service1:"Bathroom fiting",categery:"Plumbing",email:"rajeev@gmail.com",number:"7927045890",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
  ]

  let Info4 = [
      {name:"abhishek kumar",address:"mirava bazar",Service1:"Water Tank Instolation",categery:"Plumbing",email:"abhishek@gmail.com",number:"7927345897",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
  ]

  let Info5 = [
      {name:"lucky kumar",address:"padaruna",Service1:"Water Pump instolation",categery:"Plumbing",email:"lucky@gmail.com",number:"7927346392",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
  ]

  let Info6 = [
      {name:"sujeet kumar",address:"samalganj",Service1:"Water leakege solution",categery:"Plumbing",email:"sujeet@gmail.com",number:"7420868346",image:"./logo512.png",image1:"./ffff.PNG",image2:"./form.PNG",image3:"./countdown.png",image4:"./Capture5.PNG"}
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
            <div className="  text-gray-500 text-sm font-serif">{address}</div>
            <div><button className='rounded-lg mt-4 p-1 px-2 text-white bg-purple-900' onClick={()=>detailsPage(image,name,Service1,address,categery,image1, image2, image3, image4, email,number)}>Book Now</button></div>
            </div>
             
      )
          }

    return openDetailsPage ? (
      <>
        <Book categery={detailsPageData.categery} Service1={detailsPageData.Service1} address={detailsPageData.address} number={detailsPageData.number} image1={detailsPageData.image1} image2={detailsPageData.image2} image3={detailsPageData.image3} image4={detailsPageData.image4} name={detailsPageData.name} image={detailsPageData.image} email={detailsPageData.email}  />
      </>
    ) : (
      <div className="flex md:mt-[60px] md:ml-[40px]">
      <div>
       <Naavbar/>
      </div>
      <div>
      <div className="md:ml-[70px] font-bold md:mt-[40px]">Electric</div>
      <div className="mt-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
      {Info.map(details=>(
               <div className="flex flex-col  md:h-[390px] md:w-[235px]  shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
               ))}
                

                {Info2.map(details=>(
               <div className="flex flex-col  md:h-[390px] md:w-[235px]  shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                {Info3.map(details=>(
               <div className="flex flex-col  md:h-[390px] md:w-[235px]  shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                 {Info4.map(details=>(
               <div className="flex flex-col  md:h-[390px] md:w-[235px]  shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                 {Info5.map(details=>(
               <div className="flex flex-col  md:h-[390px] md:w-[235px]  shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


                 {Info6.map(details=>(
               <div className="flex flex-col  md:h-[390px] md:w-[235px]  shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out  gap-1">
               {Service(details.image,details.name,details.Service1,details.address,details.categery,details.image1,details.image2,details.image3,details.image4,details.email,details.number)}
               </div>
            ))}


              
              
          </div>
    </div>
  </div>
      
    )
}
export default Plumbing
