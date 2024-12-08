import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Header from "./Header";


const AddCoffee = () => {
  const coffeeManagement = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let chef = e.target.chef.value;
    let supplier = e.target.supplier.value;
    let taste = e.target.taste.value;
    let category = e.target.category.value;
    let details = e.target.details.value;
    let photo = e.target.photo.value;
    const coffeeInfo = {name, chef, supplier, taste, category, details, photo};
    console.log(coffeeInfo);

    fetch('https://espresso-emporium-server-kappa-liart.vercel.app/coffee', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(coffeeInfo)
    }).then(res => res.json()).then(data => {
      if(data.acknowledged){
        alert("New Coffee added successfully!");
      }
    })
  }
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Header></Header>
      {/* <div className="bg-orange-950 w-full"><h1 className="text-white text-center py-4 font-bold text-3xl">Espresso Emporium</h1></div> */}
      <div className="container mx-auto mt-5">
        <Link to="/" className="font-bold text-xl underline flex items-center gap-3"><FaArrowLeft /> Back to Home</Link> 
      </div>
      <div className="bg-[#F4F2F0] flex flex-col gap-6 justify-center items-center p-10 mt-10 py-16">
        <h1 className="font-bold text-2xl">Add New Coffee</h1>
        <p className="text-center font-medium text-gray-700">lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate ut velit rerum! met consectetur adipisicing elit. Cupiditate ut velit.</p>

        <form onSubmit={coffeeManagement} className="lg:grid grid-cols-2 gap-6">
          <label><span className="font-semibold text-black text-lg">Name: </span>
            <input name="name" type="text" placeholder="Name" className="input input-bordered text-white w-full max-w-xs" />
          </label>
          <label><span className="font-semibold text-black text-lg">Chef: </span>
            <input name="chef" type="text" placeholder="Chef" className="input input-bordered w-full max-w-xs" />
          </label>
          <label><span className="font-semibold text-black text-lg">Supplier: </span>
            <input name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full max-w-xs" />
          </label>
          <label><span className="font-semibold text-black text-lg">Taste: </span>
            <input name="taste" type="text" placeholder="taste" className="input input-bordered w-full max-w-xs" />
          </label>
          <label><span className="font-semibold text-black text-lg">Category: </span>
            <input name="category" type="text" placeholder="category" className="input input-bordered w-full max-w-xs" />
          </label>
          <label><span className="font-semibold text-black text-lg">Details: </span>
            <input name="details" type="text" placeholder="details" className="input input-bordered w-full max-w-xs" />
          </label>
          <label className="col-span-2"><span className="font-semibold text-black text-lg">Photo URL: </span>
            <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>
          <label className="col-span-2">
            <input className="btn w-full bg-[#fce4cd] hover:bg-orange-900 hover:text-white text-black" type="submit" value="Add Coffee"/>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;