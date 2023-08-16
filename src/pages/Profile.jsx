import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/layouts/Navbar";
import { TotalCartProvider } from "../context/TotalCart";
import { useState, useEffect } from "react";
import { getDetailUser } from "../services/user.service";
import CommonButton from "../components/commonButton";
import { useTotalCart } from "../context/TotalCart";
import { useTotalPrice } from "../context/TotalPriceContext";
import { useTotalPriceDispatch } from "../context/TotalPriceContext";

const ProfilePage = () => {
  const dispatchUseTotalPrice = useTotalPriceDispatch();
  const { totalCart } = useTotalCart();
  const { total } = useTotalPrice();
  const username = useLogin();
  const [toggle, setToggle] = useState(1);
  const notSelected =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  const selected =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";

  const updateToggle = (id) => {
    setToggle(id);
  };

  const [users, setUsers] = useState({});

  useEffect(() => {
    getDetailUser((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-start gap-2 py-5 ">
        <div className="w-[80rem] text-3xl font-bold mt-2">{username}</div>
        <div className="flex flex-col w-[80rem] rounded-xl h-96 ">
          <div className="text-lg font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 ">
            <ul className="flex flex-wrap -mb-px ">
              <button className="mr-2" onClick={() => updateToggle(1)}>
                <a href="#" className="peer/profile">
                  Profile
                </a>
              </button>
              <button className="mr-2" onClick={() => updateToggle(2)}>
                <a href="#" className={`peer/addresses`} aria-current="page">
                  Addresses
                </a>
              </button>
              <button className="mr-2" onClick={() => updateToggle(3)}>
                <a
                  href="#"
                  className={`${toggle === 3 ? selected : notSelected}`}
                >
                  Payment
                </a>
              </button>
              <button className="mr-2" onClick={() => updateToggle(4)}>
                <a
                  href="#"
                  className={`${toggle === 4 ? selected : notSelected}`}
                >
                  Bank Account
                </a>
              </button>
              <button className="mr-2" onClick={() => updateToggle(5)}>
                <a
                  href="#"
                  className={`${toggle === 5 ? selected : notSelected}`}
                >
                  Security
                </a>
              </button>
            </ul>
          </div>
          <div className="peer-focus/profile:visible invsible">
            {Object.keys(users).length > 0 && (
              <div>
                <div>
                  <p className="text-lg font-bold ">Change Profile</p>
                  <div>
                    <div>
                      Name : {users.name.firstname} {users.name.lastname}
                    </div>
                    <div>Birth Date : 1 January 2001</div>
                    <div>Sex : unknown</div>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold ">Change Contact</p>
                  <div>
                    <div>Email : {users.email}</div>
                    <div>Phone Number : {users.phone}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`peer-focus/addresses:visible invisible`}>
            {Object.keys(users).length > 0 && (
              <div className="">
                <CommonButton width="w-max">Add Address</CommonButton>

                <div className="max-w-sm px-6 py-4 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <p className="mb-2 font-bold">Home</p>
                  <p className="text-xl font-bold">
                    {users.name.firstname} {users.name.lastname}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {users.phone}
                  </p>

                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {users.address.street}, No.{users.address.number}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {users.address.city}, {users.address.zipcode}
                  </p>
                  <CommonButton>Change Address</CommonButton>
                </div>
              </div>
            )}
          </div>
          <div className={`py-4 ${toggle === 3 ? "block" : "hidden"}`}>
            Coming soon...
          </div>
          <div className={`py-4 ${toggle === 4 ? "block" : "hidden"}`}>
            Coming soon...
          </div>
          <div className={`py-4 ${toggle === 5 ? "block" : "hidden"}`}>
            Coming soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
