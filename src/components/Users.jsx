import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AuthContext } from "../provider/AuthProvider";
import { auth } from "../firebase/firebase.init";


const Users = () => {
  let {deleteAcc} = useContext(AuthContext);
  let usersData = useLoaderData();
  let [getUser, setUser] = useState(usersData);

  const handleEditor = id => {
    console.log(`Edited ${id}`);
  }
  const handleDelete = (id) => {
    deleteAcc(auth)
    .then(() => {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
        headers: {'content-type': 'application/json'},
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err.message))
    }).catch(err => console.log(err.message))
}
  return (
    <div className="container mx-auto">
      <Header></Header>

      <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              getUser.map(data => <tr key={data._id}>
                <td>{data.email}</td>
                <td>{data.pass}</td>
                <td><button onClick={() => handleEditor(data._id)} className="btn btn-sm"><CiEdit /></button> <button onClick={() => handleDelete(data._id, data)} className="btn btn-sm">X</button></td>
              </tr>)
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Users;