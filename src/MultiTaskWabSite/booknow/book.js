import React from "react";


function Book({ image, categery,Service1, name, address,  image1, image2, image3, image4, email,number}) {
 

 
  return (
    <div className="mt-[80px] md:ml-[100px] ml-1 ">
      <div><a href="services"><button className="text-purple-900 shadow-lg rounded-md translate-y-[-40px]">Go Back</button></a></div>
      <div className="flex ">
        <div className="md:m-4 m-2">
          <img className="md:h-[200px] md:w-[200px] rounded-full shadow-md" src={image} alt="logo" />
        </div>
        <div className="h-2 translate-y-[35px]">
          <div className="text-purple-800  bg-purple-200 p-1 px-2 text-[12px] border border-solid w-[70px] rounded-full ">{address}</div>
          <div className="mt-3 font-bold text-xl ">{categery}</div>
          <div className="font-extrabold text-4xl mt-1 mb-2">{name}</div>
          <div className="flex">
            <div>
              <img className="h-[20px] w-[20px] translate-y-1 " src="./location.png" alt="" />
            </div>
            <div className="ml-1 font-serif mt-2 mb-2"> {Service1}</div>
           
          </div>
          <div className="flex">
           <div>
              <img className="h-[20px] w-[20px]" src="./email (1).png" alt="" />
            </div>
            <div className="md:mb-2 ml-1 font-serif md:translate-x-[0px] translate-x-[-30px]"> {email}</div>
          </div>
          <div className="font-bold font-sans">{number}</div>
        </div>
      </div>
      <div className="font-extrabold text-xl mt-[100px] mb-2">Description</div>
      <div className="md:w-[800px] w-[340px] font-serif">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

      <div className="font-extrabold text-xl mt-8 mb-2">Gallary</div>
      <div className="flex ">
       
        <div className="md:m-4 m-1">
          <img className=" cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out md:h-[200px] md:w-[230px] h-[80px] w-[90px] rounded-md shadow-md " src={image1} alt="h" />
        </div>
        <div  className="md:m-4 m-1" >
          <img className="  cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out md:h-[200px] md:w-[230px] h-[80px] w-[90px] rounded-md shadow-md " src={image2} alt="h" />
        </div>
        <div  className="md:m-4 m-1">
          <img className=" cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out md:h-[200px] md:w-[230px] h-[80px] w-[90px] rounded-md shadow-md  " src={image3} alt="h" />
        </div>
        <div  className="md:m-4 m-1">
          <img className=" cursor-pointer hover:shadow-lg hover:shadow-purple-600 hover:scale-110 transition-all ease-in-out md:h-[200px] md:w-[230px]  h-[80px] w-[90px]  rounded-md shadow-md  " src={image4} alt="h" />
        </div>
      </div>
    </div>
  );
}

export default Book;
