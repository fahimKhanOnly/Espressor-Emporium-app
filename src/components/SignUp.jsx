import { useContext } from "react";
import Header from "./Header";
import { AuthContext } from "../provider/AuthProvider";


const SignUp = () => {
  const {createAcc} = useContext(AuthContext);
  const signUpHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    const newUser = {email, pass};

    createAcc(email, pass).then(result => {
      console.log(result.user.metadata);
      fetch('https://espresso-emporium-server-kappa-liart.vercel.app/users', {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newUser),
      }).then(res => res.json()).then(data => console.log(data))
    }).catch(err => console.log(err.message));
  }
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={signUpHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;