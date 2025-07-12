import { useState } from "react";
import { ShipWheelIcon, LanguagesIcon, UserIcon, MailIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-900 to-forest-700 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Signup Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col">
          <div className="flex flex-col items-center mb-8">
            {/* <div className="flex items-center justify-center bg-primary/10 p-4 rounded-full mb-4">
              <ShipWheelIcon className="size-10 text-primary animate-spin-slow" />
            </div> */}
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient bg-[length:200%_auto]">
              ChatterHub
            </h1>
            <p className="text-sm text-gray-500 mt-2">Join our global language community</p>
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
              <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
              <p className="text-gray-500">Start your language learning journey today</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              {/* Full Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <UserIcon className="size-4" />
                    Full Name
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered w-full pl-10"
                    value={signupData.fullName}
                    onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                    required
                  />
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                </div>
              </div>

              {/* Email */}
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
                    placeholder="john@example.com"
                    className="input input-bordered w-full pl-10"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    required
                  />
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                </div>
              </div>

              {/* Password */}
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
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    required
                  />
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                </div>
                <label className="label">
                  <span className="label-text-alt">Minimum 6 characters</span>
                </label>
              </div>

              {/* Terms Checkbox */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm rounded"
                    required
                  />
                  <span className="label-text text-sm">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full mt-4 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

           

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline hover:text-primary/80"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-20 w-64 h-64 bg-primary/5 rounded-full"></div>
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
                        Hello everyone
                      </div>
                    </div>
                    <div className="chat chat-end">
                      <div className="chat-bubble bg-secondary text-white">
                        connecting with others
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

export default SignUpPage;