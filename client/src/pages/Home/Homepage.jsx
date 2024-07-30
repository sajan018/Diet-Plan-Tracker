import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiPivotaltracker, SiX } from "react-icons/si";
import { MdOutlineStart } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const toggle = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect();
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-black opacity-75 flex flex-col justify-center items-center">
      <button
        onClick={toggle}
        className="bg-yellow-500 flex items-center hover:bg-yellow-300 hover:opacity-80 opacity-90 text-white gap-2 p-4 rounded-2xl shadow-md text-xl font-semibold"
      >
        Want to track your diet <SiPivotaltracker className="animate-spin" />
      </button>

      {open && (
        <div className="w-full h-full absolute sm:px-32 top-0 bg-gray-100 flex flex-col justify-center items-center">
          {/* Add content or styling here */}
          <div className="bg-white rounded-2xl p-10 flex flex-col gap-5 justify-center items-center">
            <button>
              <SiX onClick={toggle} />
            </button>

            <p className="text-black bg-yellow-200 font-bold p-3 rounded-md">
              You have two options
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-white">
              <Link to="/calculate-calories">
                <button className="bg-blue-500 px-4 p-2 flex gap-2 items-center justify-center rounded-lg shadow-lg hover:bg-blue-600">
                  calculate your calories
                  <MdOutlineStart />{" "}
                </button>
              </Link>
              <button className="bg-green-500 px-4 p-2 flex gap-2 items-center justify-center rounded-lg shadow-lg hover:bg-green-600">
                make your diet plan <MdOutlineStart />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
