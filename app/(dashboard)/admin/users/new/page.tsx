"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {sanitizeFormData} from "@/lib/form-sanitize";
import { isValidEmailAddressFormat } from "@/lib/utils";

const DashboardCreateNewUser = () => {
  const [userInput, setUserInput] = useState<{
    email: string;
    password: string;
    role: string;
  }>({
    email: "",
    password: "",
    role: "user",
  });

  const AddNewUser = () => {
    if (userInput.email === "" || userInput.password === "") {
      toast.error("Email and Password are required");
      return;
    }

    const sanitizedData = sanitizeFormData(userInput);

    if (
    userInput.email.length > 3 &&
    userInput.password.length > 3 &&
    userInput.role.length > 0
  ) {
    if (!isValidEmailAddressFormat(userInput.email)) {
      toast.error("Email format is invalid");
      return;
    }
  }
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <div className="flex flex-col gap-y-7 xl:pl-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Add new user</h1>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              type="email"
              placeholder="Type user email"
              className="input input-bordered w-full max-w-xs"
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              placeholder="Type user password"
              className="input input-bordered w-full max-w-xs"
              value={userInput.password}
              onChange={(e) =>
                setUserInput({ ...userInput, password: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Role:</span>
            </div>
            <select
              className="select select-bordered w-full max-w-xs"
              value={userInput.role}
              onChange={(e) =>
                setUserInput({ ...userInput, role: e.target.value })
              }
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
        </div>

        <div className="flex gap-x-2">
          <button
            type="button"
            className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm rounded-md hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-2"
            onClick={AddNewUser}
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCreateNewUser;
