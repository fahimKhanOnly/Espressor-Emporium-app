import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AuthContext } from "../provider/AuthProvider";
import { auth } from "../firebase/firebase.init";
import { deleteUser } from "firebase/auth";


const Users = () => {
  const {deleteAcc} = useContext(AuthContext);
  let usersData = useLoaderData();
  let [getUser, setUser] = useState(usersData);

  const handleEditor = id => {
    console.log(`Edited ${id}`);
  }
  const handleDel = (id) => {
    // let user = auth.currentUser;
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    }).then(data => data.json())
    .then(data => console.log(data))
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
                <td><button onClick={() => handleEditor(data._id)} className="btn btn-sm"><CiEdit /></button> <button onClick={() => handleDel(data._id)} className="btn btn-sm">X</button></td>
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