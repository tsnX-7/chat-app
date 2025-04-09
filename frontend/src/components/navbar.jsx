import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">X-Chat</h1>
            </Link>
          </div>

          {/* <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="btn btn-sm gap-2" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div> */}
          {authUser && (
            <>
              <div className="flex items-center justify-between gap-5">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="relative">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={authUser?.profilePic || "./avatar.png"}
                        className="size-12 rounded-full object-cover border-2"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-l dropdown-content bg-base-300 rounded-box z-1 mt-1 w-40 p-2 shadow"
                  >
                    <li>
                      <Link to={"/profile"} className={`btn btn-sm gap-5`}>
                        <span className="font-bold hidden sm:inline">
                          {authUser.fullName}
                        </span>
                        {/* <User className="size-5" /> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/settings"}
                        className={`btn btn-sm gap-5 transition-colors`}
                      >
                        <Settings className="w-4 h-4" />
                        <span className="hidden sm:inline">Settings</span>
                      </Link>
                    </li>

                    <li>
                      <button className="btn btn-sm gap-5" onClick={logout}>
                        <LogOut className="size-5" />
                        <span className="hidden sm:inline">Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
