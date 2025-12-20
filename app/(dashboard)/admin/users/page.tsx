"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const DashboardUser = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     // Fetch user data from an API or database
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await fetch("/api/users");
  //         const userData = await response.json();
  //         setUsers(userData);
  //       } catch (error) {
  //         console.error("Error fetching users:", error);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4">
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center mb-5">All user</h1>
      </div>
    </div>
  );
};

export default DashboardUser;
