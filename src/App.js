import "./App.css";
import {
  FiMessageCircle,
  FiHeart,
  FiMapPin,
  FiPlusSquare,
} from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosInformationCircleOutline } from "react-icons/io";

function App() {
  return (
    <div className="flex gap-10">
      <SideBar />
      <Body />
    </div>
  );
}

export default App;

const IconButton = ({ children }) => {
  return (
    <div className="w-12 h-12 flex justify-center items-center hover:bg-red-50 cursor-pointer rounded-3xl">
      {children}
    </div>
  );
};

const UserResponse = ({ response }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 flex justify-center items-center bg-red-100 cursor-pointer rounded-3xl  aspect-square">
        <HiOutlineUser className="w-6 h-6" color="#811331" />
      </div>
      <h1 className="">{response}</h1>
    </div>
  );
};

const RobotResponse = ({ response }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 flex justify-center items-center bg-black cursor-pointer rounded-3xl aspect-square">
        <svg viewBox="0 0 24 24" class="w-6 h-6">
          <path
            fill="white"
            d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838ZM1.318 12.877C7.662 11.699 11.332 7.983 12.374 1.73c.657 6.026 5.256 10.375 10.964 11.1C17.063 13.987 13.37 17.68 12.328 24c-.317-2.877-1.45-5.414-3.488-7.499-2.085-2.084-4.6-3.262-7.522-3.624ZM.66 3.434C2.614 3.07 3.745 1.926 4.066 0c.202 1.857 1.62 3.197 3.378 3.42-1.933.356-3.07 1.494-3.392 3.44-.098-.886-.447-1.667-1.075-2.31C2.335 3.909 1.56 3.547.66 3.435Z"
          ></path>
        </svg>{" "}
      </div>
      <h1 className="">{response}</h1>
    </div>
  );
};

function Header() {
  return (
    <div className="flex justify-between items-center pr-10 py-3">
      <span>New chat</span>
      <div className="flex justify-between items-center gap-8">
        <div className="flex justify-center items-center hover:bg-red-100 cursor-pointer rounded-3xl py-2 px-4">
          <span>Sign in</span>
        </div>
        <div className="flex justify-center items-center hover:border-black cursor-pointer rounded-3xl py-2 px-4 border border-gray-400 gap-2">
          <IoBagOutline size={18} />
          <span>Create a trip</span>
        </div>
      </div>
    </div>
  );
}

function Body() {
  const responses = [
    {
      key: 0,
      isUser: true,
      response: "hey, how is today?!",
    },
    {
      key: 1,
      isUser: false,
      response: "Today is a beautiful day. Thank you for Asking!",
    },
    {
      key: 2,
      isUser: true,
      response: "Please, Suggest me a trip to canada!",
    },
    {
      key: 3,
      isUser: false,
      response:
        "Sure, i can suggest you some beautiful places and timing to hangout in canada. How many does are you planning to spend on trip!",
    },
  ];
  return (
    <div className="flex-1 h-screen  overflow-hidden">
      <Header />

      {/* Main Box */}
      <div className="flex gap-8">
        {/* Left Part */}
        <div className="flex flex-col justify-between basis-1/2 h-full">
          <div>
            <div className="flex flex-col mt-10 gap-8">
              <h1 className="text-4xl font-semibold">Welcome to this trip!</h1>
              {responses.map((item) => {
                return item.isUser ? (
                  <>
                    <UserResponse response={item.response} />
                    <hr />
                  </>
                ) : (
                  <>
                    <RobotResponse response={item.response} />
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
          {/* Bottom sending message */}
          <div className="border border-gray-300 border-2 rounded p-4 m-h-4 rounded-xl mt-8">
            <textarea
              className="hover:outline-none text-lg w-full"
              placeholder="Send a Message...."
              style={{
                resize: false,
              }}
              rows={2}
            />
          </div>
          <p className="text-xs text-gray-400 text-center my-2">
            {" "}
            Mindtrip is in beta. The bot can make mistakes. Consider checking
            important information.
          </p>
        </div>

        {/* Rigth Part */}
        <div className="basis-1/2 flex-col justify-between items-center h-full">
          <img
            src="https://cdn.sanity.io/images/cpvxwd28/production/c5eb6f679e7bb6be57dcf3f65a632dd7fb54cb8d-6000x4000.jpg?w=750"
            alt="canada"
            className="aspect-[2] rounded-xl"
          />

          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-lg font-semibold">Get Started</h2>
            <div className="flex gap-4 overflow-x-auto">
              <img
                src="https://cdn.sanity.io/images/cpvxwd28/production/c5eb6f679e7bb6be57dcf3f65a632dd7fb54cb8d-6000x4000.jpg?w=750"
                alt="canada"
                className="aspect-[1] rounded-xl"
                style={{
                  width: 200,
                  height: 200,
                }}
              />
              <img
                src="https://cdn.sanity.io/images/cpvxwd28/production/c5eb6f679e7bb6be57dcf3f65a632dd7fb54cb8d-6000x4000.jpg?w=750"
                alt="canada"
                className="aspect-[1] rounded-xl"
                style={{
                  width: 200,
                  height: 200,
                }}
              />
              <img
                src="https://cdn.sanity.io/images/cpvxwd28/production/c5eb6f679e7bb6be57dcf3f65a632dd7fb54cb8d-6000x4000.jpg?w=750"
                alt="canada"
                className="aspect-[1] rounded-xl"
                style={{
                  width: 200,
                  height: 200,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="w-16 h-screen flex flex-col items-center justify-between border-e-2">
      <div className="flex flex-col items-center gap-2.5">
        <div className="h-12 mt-2">
          <IconButton>
            <svg viewBox="0 0 24 24" class="w-6 h-6">
              <path
                fill="currentColor"
                d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838ZM1.318 12.877C7.662 11.699 11.332 7.983 12.374 1.73c.657 6.026 5.256 10.375 10.964 11.1C17.063 13.987 13.37 17.68 12.328 24c-.317-2.877-1.45-5.414-3.488-7.499-2.085-2.084-4.6-3.262-7.522-3.624ZM.66 3.434C2.614 3.07 3.745 1.926 4.066 0c.202 1.857 1.62 3.197 3.378 3.42-1.933.356-3.07 1.494-3.392 3.44-.098-.886-.447-1.667-1.075-2.31C2.335 3.909 1.56 3.547.66 3.435Z"
              ></path>
            </svg>
          </IconButton>
        </div>
        <IconButton>
          <FiMessageCircle className="w-6 h-6" />
        </IconButton>
        <IconButton>
          <RiNotification4Line className="w-6 h-6" />
        </IconButton>
        <IconButton>
          <FiHeart className="w-6 h-6" />
        </IconButton>
        <IconButton>
          <IoBagOutline className="w-6 h-6" />
        </IconButton>
        <IconButton>
          <FiMapPin className="w-6 h-6" />
        </IconButton>
        <IconButton>
          <FiPlusSquare className="w-6 h-6" />
        </IconButton>
      </div>
      <div className="flex flex-col items-center gap-2.5 mb-8">
        <div className="w-10 h-10 flex justify-center items-center bg-red-100 cursor-pointer rounded-3xl">
          <HiOutlineUser className="w-6 h-6" color="#811331" />
        </div>
        <div className="w-12 h-12 flex justify-center items-center group hover:bg-red-50 cursor-pointer rounded-3xl">
          <IoIosInformationCircleOutline className="w-6 h-6 text-slate-400 group-hover:text-black" />
        </div>
      </div>
    </div>
  );
}
