import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const { loginwithEmail, loginwithgoogle } = useContext(authContext);
  const handleloginwithemail = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginwithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        toast("Login successFull !");
        navigate("/service");
      })
      .catch((error) => {
        console.log("this is error", error);
        toast("OPPS WRONG!");
      });
  };
  const handleGoogle = () => {
    loginwithgoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast("Login successFull !");
      })
      .catch((error) => {
        console.log("this is error", error);
        toast("OPPS WRONG!");
      });
  };
  return (
    <div className="flex flex-col max-w-md  mx-auto my-16 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
      <ToastContainer />
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-400">Sign in to access your account</p>
      </div>
      <button
        aria-label="Login with Google"
        type="button"
        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-400"
        onClick={handleGoogle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-current"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        <p>Login with Google</p>
      </button>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>
      <form
        novalidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleloginwithemail}
      >
        <div className="space-y-4">
          <div>
            <label for="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm">
                Password
              </label>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-blue-400 text-gray-900"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
            <Link
              rel="noopener noreferrer"
              to="/signup"
              className="hover:underline text-blue-400"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
