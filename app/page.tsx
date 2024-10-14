
import Image from "next/image";
import ProductsList from "./components/ProductsList";


export default function Home() {
  return (
    <div className="dark:bg-slate-900 dark:text-white w-full">
      <div  className="min-h-screen w-screen dark:bg-slate-900  md:w-[80%] mx-auto py-12" >
        <ProductsList/>
      

      </div>
   

    </div>
    
  );
}
