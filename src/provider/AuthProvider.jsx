import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAcc = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  const deleteAcc = (user) => deleteUser(user);

  const authInfo = {user, loading, createAcc, deleteAcc};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;