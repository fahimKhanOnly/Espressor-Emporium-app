import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import Header from "./Header";


const Coffees = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <Header></Header>
      <h1 className="text-2xl font-bold mt-5">Gorom Gorom Coffee </h1>
      
      <div className="lg:grid grid-cols-2 gap-6">
        {
          data.map(coffee => <CoffeeCard key={coffee._id} data={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default Coffees;