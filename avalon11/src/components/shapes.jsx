import react from "react"; 
import AnimalCard from './AnimalCard';
import Nav from "./Nav";
function Shapes(){
    return (
        <div className="flex w-64 ">
            <Nav />
            <div className=" ">
             <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
                <AnimalCard props="https://i.pinimg.com/736x/cd/f7/3f/cdf73f2ee218ab8705f762623d9eeb9f.jpg"character="Circle"/>
                <AnimalCard props="https://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"character="Square"/>
                <AnimalCard props="https://t4.ftcdn.net/jpg/01/26/96/79/360_F_126967956_cw7Hj9jZBSMq0LhmQOt1thg8FPubxF8Q.jpg"character="Traingle"/>
                <AnimalCard props="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/800px-Five-pointed_star.svg.png"character="Star"/>
                <AnimalCard props = " https://img.freepik.com/free-vector/stroke-rhombus-geometric-shape-vector_53876-175089.jpg?size=338&ext=jpg&ga=GA1.1.1269040533.1708992000&semt=ais" character="Daimond" />
             </div>
        </div>    
       </div>             
    )
}

export default Shapes