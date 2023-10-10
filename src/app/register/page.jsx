"use client"
import { useState } from "react";

const page = () => {
  const [regInfo, setRegInfo] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegInfo({ ...regInfo, [name]: value });
  };

  const handleOnSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regInfo),
      });

      if (res.ok) {
        console.log("Register done!");
      } else {
        console.error("Error with registration");
      }
    } catch (error) {
      console.error("Error send data to db", error);
    }
  };

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={handleOnSumbit} method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm ">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={regInfo.username}
              onChange={handleChange}
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Логин"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={regInfo.password}
              onChange={handleChange}
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Пароль"
            />
          </div>
          <div>
            <input
              type="text"
              id="role"
              name="role"
              value={regInfo.role}
              onChange={handleChange}
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Роль"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
