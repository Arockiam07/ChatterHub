import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, ShipWheelIcon, MenuIcon, XIcon, HomeIcon, MessageSquare, User, Sun, Moon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import { useState } from "react";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const { logoutMutation } = useLogout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemeOptions, setShowThemeOptions] = useState(false);

  // Determine active route for bottom nav
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Mobile menu button and logo */}
            <div className="flex items-center gap-4 md:hidden">
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={authUser?.profilePic} alt="User Avatar" />
                </div>
              </div>

              {/* Logo - visible only in mobile view */}
              <div className="md:hidden">
                <Link to="/" className="flex items-center gap-2.5">
                  {/* <ShipWheelIcon className="size-7 text-primary" /> */}
                  <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                    ChatterHub
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 sm:gap-4 ml-auto">
               <Link
            to="/"
            className={`flex flex-col items-center justify-center p-2 w-full ${isActive('/')  }`}
            onClick={() => setShowThemeOptions(false)}
          >
              <button className="btn btn-ghost btn-circle">
            <HomeIcon className="h-6 w-6 text-base-content opacity-70" />
             </button>
           
          </Link>

              <Link to={"/notifications"}>
                <button className="btn btn-ghost btn-circle">
                  <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                </button>
              </Link>

              <ThemeSelector />

              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={authUser?.profilePic} alt="User Avatar" />
                </div>
              </div>

              <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
                <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </div>

            {/* Mobile Navigation (Dropdown) */}
           
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-base-200 border-t border-base-300 z-20 h-16">
        <div className="flex justify-around items-center h-full px-2">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center p-2 w-full ${isActive('/') ? 'text-primary' : 'text-base-content'}`}
            onClick={() => setShowThemeOptions(false)}
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>

          {/* <Link
            to="/chat"
            className={`flex flex-col items-center justify-center p-2 w-full ${location.pathname.startsWith("/chat") ? 'text-primary' : 'text-base-content'}`}
            onClick={() => setShowThemeOptions(false)}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-1">Chat</span>
          </Link> */}

             <Link
            to="/notifications"
            className={`flex flex-col items-center justify-center p-2 w-full ${isActive('/notifications') ? 'text-primary' : 'text-base-content'}`}
            onClick={() => setShowThemeOptions(false)}
          >
            <BellIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Notification</span>
          </Link>
          
          {/* Theme Selector */}
          <div className="relative flex flex-col items-center">
            <button
              className={`flex flex-col items-center justify-center p-2 w-full ${showThemeOptions ? 'text-primary' : 'text-base-content'}`}
              onClick={() => setShowThemeOptions(!showThemeOptions)}
            >
              {showThemeOptions ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="text-xs mt-1">Theme</span>
            </button>


            {showThemeOptions && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                <div
                  className="relative bg-base-200 rounded-lg shadow-lg p-4 w-48"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-base-content hover:text-primary"
                    onClick={() => setShowThemeOptions(false)}
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                  <ThemeSelector
                    mobile
                    onSelect={() => setShowThemeOptions(false)}
                  />
                </div>
              </div>
            )}
          </div>

         

          <button
            className={`flex flex-col items-center justify-center p-2 w-full text-base-content`}
            onClick={() => {
              logoutMutation();
              setShowThemeOptions(false);
            }}
          >
            <LogOutIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
