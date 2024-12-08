import { Link } from "react-router-dom";

const CoffeeCard = ({data}) => {
  const {name, photo, taste, details} = data;

  const deleteHandler = _id => {
    console.log(_id);
    fetch(`https://espresso-emporium-server-kappa-liart.vercel.app/coffee/${_id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(output => console.log(output))
  }

  return (
    <div className="">
      <div className="card card-side bg-base-300 shadow-xl p-5">
        <figure>
          <img className="w-36" src={photo} />
        </figure>
        <div className="card-body">
          <h4><span className="font-bold">Name: </span>{name}</h4>
          <h4><span className="font-bold">Taste: </span>{taste}</h4>
          <h4><span className="font-bold">Details: </span>{details}</h4>
        </div>
        <div className="flex flex-col justify-between">
          <button className="btn btn-sm btn-secondary">View</button>
          <Link to={`/updateCoffee/${data._id}`} className="btn btn-sm btn-warning">Edit</Link>
          <button onClick={() => deleteHandler(data._id)} className="btn btn-sm btn-error">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;