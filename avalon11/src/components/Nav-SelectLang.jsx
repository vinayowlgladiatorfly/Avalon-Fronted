import Selectlang from "./Selectlang";
import Nav from './Nav.jsx';
function Nav_SelectLang() {
  return (
    <>
    <h1 className='bg-red-900'></h1>
    <Nav/>
    <h1 className="text-center py-4">Enjoy your Learning Journey!</h1>
    <h2 className="text-center text-dark py-4 font-bold text-lg">Choose Your Language</h2>
    <div className=" justify-center flex gap-12">
    <Selectlang image="https://imgs.search.brave.com/7_sXtKMrQLRe2W8L8-o1qxm6-bd0g6w-r9IrI5Mfnv4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/bmdsaXNoLWJyaXRp/c2gtZW5nbGFuZC1s/YW5ndWFnZS1lZHVj/YXRpb24tY29uY2Vw/dF81Mzg3Ni0xMzM3/MzUuanBnP3NpemU9/NjI2JmV4dD1qcGc"lang="English"Learn="Learn"/>
    <Selectlang image="https://as2.ftcdn.net/v2/jpg/02/02/91/75/1000_F_202917523_gA18YmAiiRh3bGk2V7bLkBxCelP3LuPs.jpg" lang="Hindi"Learn="in Process"/>
    <Selectlang image="https://imgs.search.brave.com/oxsl64ovjYUY_PGyGdIJBvOMytdr8IbpuAy3mQBdnG4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LWNkbi5yZWVkc3ku/Y29tL2Fzc2V0cy9j/aGFyYWN0ZXItZ2Vu/ZXJhdG9yL2ZyZW5j/aC1jM2I0MTJkZjA5/MWJiNWM0ZjhjODYz/ZWRhMTY5MDY5NWQy/OWI3OWY0ZWI4NGVj/NTI5YzBmYWRlNGM5/YzUwMmE3LmpwZw"lang="Marathi"Learn="in Process"/>
    <Selectlang image="https://media.istockphoto.com/id/1453852952/vector/spanish.jpg?s=612x612&w=0&k=20&c=osO54uBF4_OsGvHjbDON15g9lecjS2Jhw7QiaFZjSao="lang="Spanish" Learn="In Process" />
    </div>
    <div className=" justify-center flex gap-12">
    <Selectlang image="https://imgs.search.brave.com/Q5RLYvljWdV8TOr6wN7JCeFhEeGJwqgwgFCFe5GyBKg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2QxNC9pdGFs/eS0xMjUzNzYwLmpw/Zz9mbXQ"lang="italian" Learn="In Process"/>
    <Selectlang image="https://imgs.search.brave.com/OIXNJgFDJA8ebtjFFRofSVBiEiB7Q2kSqo9UrqN7GHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNi8xOC8yNi9l/aWZmZWwtdG93ZXIt/OTc1MDA0XzY0MC5q/cGc"lang="french"  Learn="In Process"/>
    </div>
    
    </>
  );
}

export default Nav_SelectLang;
