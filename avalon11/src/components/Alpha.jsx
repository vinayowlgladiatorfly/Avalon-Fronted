import React from "react";
import SidebarThree from "./Sidebartree";
import Nav from "./Nav";
import Card from "./Card";


function Alpha(){

    // let length = 25;
    // let cards = [];
    // for (let index = 0; index < length; index++) {
    //     cards.push(<Card key={index} />);
    // }

    return(
        <>
        <Nav/>
        <div className="flex w-64 ">
            <div className="">
                <SidebarThree/>
            </div>
            <div className=" ">

             <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
             <Card props='A'/>
             <Card props='B'/>
             <Card props='C'/>
             <Card props='D'/>
             <Card props='E'/>
             <Card props='F'/>
             </div>
             <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
             <Card props='G'/>
             <Card props='H'/>
             <Card props='I'/>
             <Card props='J'/>
             <Card props='K'/>
             <Card props='L'/>
             </div>
             
            

             

             

            
            </div> 
            

            
            </div>
           


        
        
        </>
    )

}
export default Alpha