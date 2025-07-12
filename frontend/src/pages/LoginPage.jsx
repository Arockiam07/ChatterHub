import { useState } from "react";
import { ShipWheelIcon, LanguagesIcon, MailIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-900 to-forest-700 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col">
          <div className="flex flex-col items-center mb-8">
            {/* <div className="flex items-center justify-center bg-primary/10 p-4 rounded-full mb-4">
              <ShipWheelIcon className="size-10 text-primary animate-spin-slow" />
            </div> */}
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ChatterHub
            </h1>
            <p className="text-sm text-gray-500 mt-2">Your global language community</p>
          </div>

          {error && (
            <div className="alert alert-error shadow-lg mb-6 animate-fade-in">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error.response.data.message}</span>
              </div>
            </div>
          )}

          <div className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-gray-500">Sign in to continue your language journey</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <MailIcon className="size-4" />
                    Email Address
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="input input-bordered w-full pl-10"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <LockIcon className="size-4" />
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full pl-10"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="cursor-pointer label space-x-2">
                  <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                  <span className="label-text">Remember me</span>
                </label>
                {/* <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link> */}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-4 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary font-medium hover:underline hover:text-primary/80"
                >
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <LanguagesIcon className="size-12 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Connect with language partners worldwide</h2>
            <p className="text-lg text-gray-600 mb-8">
              Practice conversations, make friends, and improve your language skills together
            </p>
            
            <div className="flex justify-center">
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="carousel-item">
                    <div className="chat chat-start">
                      <div className="chat-bubble bg-primary text-white">
                        Hello Everyone
                      </div>
                    </div>
                    <div className="chat chat-end">
                      <div className="chat-bubble bg-secondary text-white">
                       Connecting with others
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              {/* {['🇪🇸', '🇫🇷', '🇩🇪', '🇯🇵', '🇮🇹', '🇨🇳'].map((flag, i) => (
                <span key={i} className="text-2xl hover:scale-125 transition-transform">
                  {flag}
                </span>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;